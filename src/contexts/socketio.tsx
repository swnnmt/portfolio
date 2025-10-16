// src/contexts/socketio.tsx
"use client";
import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { io, Socket } from "socket.io-client";
import { generateRandomCursor } from "../lib/generate-random-cursor";

export type User = {
  socketId: string;
  name: string;
  color: string;
  pos: { x: number; y: number };
  location: string;
  flag: string;
};

export type Message = {
  socketId: string;
  content: string;
  time: Date;
  username: string;
};

export type UserMap = Map<string, User>;

type SocketContextType = {
  socket: Socket | null;
  users: UserMap;
  setUsers: Dispatch<SetStateAction<UserMap>>;
  msgs: Message[];
};

const INITIAL_STATE: SocketContextType = {
  socket: null,
  users: new Map(),
  setUsers: () => {},
  msgs: [],
};

export const SocketContext = createContext<SocketContextType>(INITIAL_STATE);

const SocketContextProvider = ({ children }: { children: ReactNode }) => {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [users, setUsers] = useState<UserMap>(new Map());
  const [msgs, setMsgs] = useState<Message[]>([]);

  useEffect(() => {
    const username =
      localStorage.getItem("username") || generateRandomCursor().name;

    // ✅ Kết nối socket
    const socket = io(process.env.NEXT_PUBLIC_WS_URL!, {
      query: { username },
      transports: ["websocket"], // đảm bảo dùng WebSocket thật
    });

    setSocket(socket);

    // Khi kết nối thành công
    socket.on("connect", () => {
      console.log("✅ Connected to Socket.IO:", socket.id);
    });

    // Nhận toàn bộ tin nhắn cũ
    socket.on("msgs-receive-init", (msgs) => setMsgs(msgs));

    // Nhận tin nhắn mới
    socket.on("msg-receive", (msg) => setMsgs((prev) => [...prev, msg]));

    // ✅ Nhận danh sách user từ server
    socket.on("users-updated", (data) => {
      const newMap = new Map<string, User>();
      data.forEach((user: User) => {
        newMap.set(user.socketId, user);
      });
      setUsers(newMap);
    });

    // ✅ Nhận cập nhật con trỏ chuột
    socket.on("cursor-changed", (data: User) => {
      setUsers((prev) => {
        const newMap = new Map(prev);
        newMap.set(data.socketId, { ...prev.get(data.socketId), ...data });
        return newMap;
      });
    });

    socket.on("disconnect", () => {
      console.log("⚠️ Socket disconnected");
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <SocketContext.Provider value={{ socket, users, setUsers, msgs }}>
      {children}
    </SocketContext.Provider>
  );
};

export default SocketContextProvider;
