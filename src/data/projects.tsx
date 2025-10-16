import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight, ExternalLink, Link2, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { title } from "process";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill, RiJavaFill } from "react-icons/ri";
import {
  SiChakraui,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReactquery,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
  SiHtml5,
  SiCss3,
  SiMysql,
  SiVite,
  SiSpringboot
  
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link
        className="font-mono underline flex gap-2"
        rel="noopener"
        target="_new"
        href={live}
      >
        {/* <Button variant={"default"} size={"sm"}>
          Visit Website
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button> */}
      </Link>
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS = {
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  spring: {
    title: "Spring Boot",
    bg: "black",
    fg: "white",
    icon: <SiSpringboot />,
  },
   vite: {
    title: "Vite.js",
    bg: "black",
    fg: "white",
    icon: <SiVite />,
  },
   css: {
    title: "Css3",
    bg: "black",
    fg: "white",
    icon: <SiCss3 />,
  },
   mysql: {
    title: "MySql",
    bg: "black",
    fg: "white",
    icon: <SiMysql />,
  },
    java: {
    title: "Java",
    bg: "black",
    fg: "white",
    icon: <RiJavaFill />,
  },
  html: {
    title: "HTML5",
    bg:"black",
    fg:"white",
    icon: <SiHtml5/>
  },
  chakra: {
    title: "Chakra UI",
    bg: "black",
    fg: "white",
    icon: <SiChakraui />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  prisma: {
    title: "prisma",
    bg: "black",
    fg: "white",
    icon: <SiPrisma />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  reactQuery: {
    title: "React Query",
    bg: "black",
    fg: "white",
    icon: <SiReactquery />,
  },
  shadcn: {
    title: "ShanCN UI",
    bg: "black",
    fg: "white",
    icon: <SiShadcnui />,
  },
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  yjs: {
    title: "Y.js",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>Y</strong>js
      </span>
    ),
  },
  firebase: {
    title: "Firebase",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  sockerio: {
    title: "Socket.io",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  vue: {
    title: "Vue.js",
    bg: "black",
    fg: "white",
    icon: <SiVuedotjs />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  sanity: {
    title: "Sanity",
    bg: "black",
    fg: "white",
    icon: <SiSanity />,
  },
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  gsap: {
    title: "GSAP",
    bg: "black",
    fg: "white",
    icon: "",
  },
  framerMotion: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
  supabase: {
    title: "Supabase",
    bg: "black",
    fg: "white",
    icon: <SiSupabase />,
  },
};
export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};
const projects: Project[] = [
  {
    id: "Vhome",
    category: "VhomeAi",
    title: "Vhome Ai",
    src: "/assets/projects-screenshots/vhome/Home.png",
    screenshots: ["home.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.js,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.mongo,
        PROJECT_SKILLS.sockerio,
      ],
    },
    live: "",
    github: "https://github.com/swnnmt/VHome_App",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Vhome AI – Intelligent Home Design Assistant
          </TypographyP>
          <TypographyP className="font-mono ">
             <strong>Vhome AI</strong> is an intelligent design assistant that empowers homeowners 
              and interior designers to visualize and customize their living spaces effortlessly. 
              By analyzing photos of rooms, the system detects wall and floor surfaces, 
              then applies paint colors or tile patterns in real-time — generating realistic previews 
              that help users make confident design decisions before renovation begins.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">The Challenge  </TypographyH3>
          <p className="font-mono mb-2">
            Choosing the right color palette or tile pattern is one of the most challenging parts 
            of interior design. Without visual tools, homeowners often rely on imagination or 
            small material samples, which fail to capture how designs will truly appear in the space. 
            This uncertainty leads to indecision, wasted time, and potential dissatisfaction 
            after renovation.
          </p>
          <div className="slideshow-container img">
          <SlideShow
            images={[
             `${BASE_PATH}/vhome/room_origin.jpg`,
            ]}
          />
         
          </div>
          <TypographyH3 className="my-4 mt-8">Vhome Ai</TypographyH3>
          <p className="font-mono mb-2">
            Vhome AI leverages computer vision and AI-based surface detection to identify 
            walls and floors from user-uploaded room photos. Once detected, users can experiment 
            with hundreds of paint colors, tiles, and textures through a simple and interactive interface. 
            The app automatically renders a high-quality simulation, providing a true-to-life visualization 
            of the redesigned space.
          </p>
          <p className="font-mono mb-2">
            This approach bridges the gap between imagination and reality — turning abstract design ideas 
            into vivid, photo-realistic previews within seconds.
          </p>
          <div className="slideshow-container img">
              <SlideShow
            images={[
              `${BASE_PATH}/vhome/Home.png`,
              `${BASE_PATH}/vhome/Homeoption.png`,
              `${BASE_PATH}/vhome/DesignWith.png`,
              `${BASE_PATH}/vhome/Design.png`,
              `${BASE_PATH}/vhome/freestyle.png`,
            ]}
          />
          </div>
        
          <TypographyH3 className="my-4 mt-8">Technology & Design </TypographyH3>

              <p className="font-mono mb-2">
              The Vhome AI platform is built using <strong>React.js</strong> for a smooth, modern front-end experience 
              and <strong>FastAPI</strong> as the AI processing backend. The AI pipeline uses <strong>OpenCV</strong> 
              for surface detection and <strong>deep learning models</strong> from Roboflow to accurately 
              identify boundaries between walls and floors. 
              Users can upload their room images, preview design transformations instantly, and save or continue 
              editing previous designs seamlessly.
            </p>
            <p className="font-mono mb-2">
              The user interface is carefully designed for clarity and accessibility — featuring 
              clean layouts, soft color tones, and an intuitive workflow that makes complex AI design 
              interactions feel simple and enjoyable.
            </p>
          <div className="slideshow-container img">
            <SlideShow
            images={[
              `${BASE_PATH}/vhome/Homeoption.png`,
            ]}
          />
          </div>
          
          <TypographyH3 className="my-4 mt-8">Results & Impact  </TypographyH3>
          <p className="font-mono mb-2">
              With Vhome AI, users can visualize their dream interiors with precision before committing 
              to costly renovations. By merging AI simulation and creative design tools, 
              the platform reduces decision stress, enhances satisfaction, and saves both time and resources 
              for homeowners and interior professionals.
            </p>
            <p className="font-mono mb-2">
              The outcome is a smarter, faster, and more immersive design experience — 
              where imagination meets technology to redefine how we shape our living spaces.
            </p>
          <div className="slideshow-container img">
              <SlideShow
            images={[
              `${BASE_PATH}/vhome/room_origin.jpg`,
              `${BASE_PATH}/vhome/design1.jpg`,
              `${BASE_PATH}/vhome/design2.jpg`,
              `${BASE_PATH}/vhome/design3.jpg`,
              `${BASE_PATH}/vhome/design4.jpg`,
            ]}
          />
          </div>
        

             <style jsx global>{`
          .slideshow-container img {
            width: 95% !important;
            height: 500px !important;
            object-fit: cover !important;
            border-radius: 12px;
          }
          `}</style>
        </div>
      );
    },
  },
   {
    id: "bookingTicket",
    category: "Booking Ticket",
    title: "Ticket Ticket",
    src: `${BASE_PATH}/bookingTicket/Customer/viewEvent.jpg`,
    screenshots: ["landing.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.html,
        PROJECT_SKILLS.css,
        PROJECT_SKILLS.js,
      ],
      backend: [
        PROJECT_SKILLS.java,
        PROJECT_SKILLS.mysql,
      ],
    },
    live: "",
    github: "https://github.com/hoangducfu/swp391-main",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Ticket Ticket — Your All-in-One Event Booking & Management Platform
          </TypographyP>
          <TypographyP className="font-mono ">
          A modern web application that allows users to easily discover, book, and manage entertainment events — while providing an intuitive system for administrators and staff to efficiently oversee all operations.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
      <div className="Customer">
          <TypographyH3 className="my-4 mt-8">Customer </TypographyH3>
          <p className="font-mono mb-2">
            Customers can browse a wide range of events, explore detailed event information, book tickets instantly, make secure payments, and manage their booking history — all in one seamless experience.
          </p>      
          <div className="slideshow-container">
            <SlideShow
              images={[
                `${BASE_PATH}/bookingTicket/Customer/Home.jpg`,
                `${BASE_PATH}/bookingTicket/Customer/viewEvent.jpg`,
                `${BASE_PATH}/bookingTicket/Customer/DetailEvent.jpg`,
                `${BASE_PATH}/bookingTicket/Customer/Booksit.jpg`,
                `${BASE_PATH}/bookingTicket/Customer/payment.jpg`,
                `${BASE_PATH}/bookingTicket/Customer/history.jpg`,
                `${BASE_PATH}/bookingTicket/Customer/profile.jpg`,
                `${BASE_PATH}/bookingTicket/Customer/contact.jpg`,
              ]}
            />
          </div>
      </div>
      <div className="Admin">
          <TypographyH3 className="my-4 mt-8">Admin</TypographyH3>
          <p className="font-mono mb-2">
            Admins can efficiently manage the entire platform — from user accounts and event approvals to revenue tracking, refund management, and promotional discounts.
        </p>
          <div className="slideshow-container">
          <SlideShow
            images={[
              `${BASE_PATH}/bookingTicket/Admin/managerEvent.jpg`,
              `${BASE_PATH}/bookingTicket/Admin/managerBooking.jpg`,
              `${BASE_PATH}/bookingTicket/Admin/managerCus.jpg`,
              `${BASE_PATH}/bookingTicket/Admin/ManageStaff.jpg`,
              `${BASE_PATH}/bookingTicket/Admin/refun.jpg`,
              `${BASE_PATH}/bookingTicket/Admin/Revune.jpg`,
              `${BASE_PATH}/bookingTicket/Admin/Discount.jpg`,
              
            ]}
          />
          </div>
      </div>
      <div className="Staff">
          <TypographyH3 className="my-4 mt-8">Staff </TypographyH3>

          <p className="font-mono mb-2">
             Staff members can create and update upcoming events, monitor ongoing activities, and handle user requests such as cancellations and refunds — ensuring a smooth and responsive event experience for everyone.
          </p>
          <div className="slideshow-container img">
          <SlideShow
            images={[
              `${BASE_PATH}/bookingTicket/Staff/Home.jpg`,
              `${BASE_PATH}/bookingTicket/Staff/Create1.jpg`,
              `${BASE_PATH}/bookingTicket/Staff/Create2.jpg`,
              `${BASE_PATH}/bookingTicket/Staff/Create3.jpg`,
              `${BASE_PATH}/bookingTicket/Staff/Create4.jpg`,
              `${BASE_PATH}/bookingTicket/Staff/Create5.jpg`,
              `${BASE_PATH}/bookingTicket/Staff/CreateDiscount.jpg`,
              `${BASE_PATH}/bookingTicket/Staff/ManageBooking.jpg`,
              `${BASE_PATH}/bookingTicket/Staff/ManageDis.jpg`,
            ]}
          />
          </div>
      </div>
           <style jsx global>{`
          .slideshow-container img {
            width: 95% !important;
            height: 500px !important;
            object-fit: cover !important;
            border-radius: 12px;
          }
          `}</style>
        </div>
        
      );
    },
  },
  {
    id: "Ecommerce",
    category: "Ecommerce",
    title: "Ecommerce Fashion",
    src: "/assets/projects-screenshots/ecomerce/Home.png",
    screenshots: ["1.png", "2.png", "3.png", "4.png", "5.png"],
    live: "",
    github: "https://github.com/swnnmt/Ecommerce",
    skills: {
      frontend: [
        PROJECT_SKILLS.js,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.html,
        PROJECT_SKILLS.css,
      ],
      backend: [
        // PROJECT_SKILLS.js,
      ],
    },
    get content(): JSX.Element {
      return (
        <div>
          <TypographyP className="font-mono ">
             <strong>Ecommerce Fashion</strong> is a modern and responsive web
              interface designed for an online fashion store. It focuses on clean
              aesthetics, smooth navigation, and an engaging shopping experience
              built entirely with frontend technologies.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <p className="font-mono mb-2 mt-4">
              The homepage highlights featured collections, trendy outfits, and
              curated fashion items with elegant layouts and vibrant visuals that
              reflect a contemporary shopping experience.
          </p>
            <SlideShow images={[`${BASE_PATH}/ecomerce/Home.png`]} />
          <TypographyH3 className="my-4 ">User Interface</TypographyH3>
          <p className="font-mono mb-2">
                The interface includes intuitive pages for user authentication such as
                login and registration, along with a personalized profile section.
                Every screen is designed with a consistent visual style that enhances
                usability and maintains a premium look.
          </p>
        <div className="slideshow-container img">
          <SlideShow
            images={[
              `${BASE_PATH}/ecomerce/Login.png`,
              `${BASE_PATH}/ecomerce/SignUp.png`,
              `${BASE_PATH}/ecomerce/profile.png`,
            ]}
          />
        </div>
          <TypographyH3 className="my-4 mt-8">Product Pages</TypographyH3>

          <p className="font-mono mb-2">
            Products are presented with high-quality imagery, detailed
            descriptions, and neatly structured layouts. Users can explore
            different clothing categories and view each item with stylish
            presentation cards.
          </p>
          <div className="slideshow-container img">
          <SlideShow images={[`${BASE_PATH}/ecomerce/Product.png`]} />
          </div>
          <TypographyH3 className="my-4 mt-8">Shopping Flow </TypographyH3>
          <p className="font-mono mb-2">
             The design includes cart and checkout pages that simulate a complete
              online shopping process. Transitions and responsive layouts ensure a
              smooth browsing experience across all screen sizes.
          </p>

          <div className="slideshow-container img">
             <SlideShow
            images={[
              `${BASE_PATH}/ecomerce/DetailProduct.png`,
              `${BASE_PATH}/ecomerce/Shopingcart.png`,
                `${BASE_PATH}/ecomerce/CheckOut.png`,
            ]}
          />
          </div>
            <TypographyH3 className="my-4 mt-8">Technology & Design</TypographyH3>
          <p className="font-mono mb-2">
            Built using <strong>ReactJs</strong>, <strong>JavaScript</strong>,{" "}, this frontend project emphasizes
            modular design, reusable components, and pixel-perfect responsiveness
            for a professional eCommerce look and feel.
          </p>

             <style jsx global>{`
          .slideshow-container img {
            width: 95% !important;
            height: 500px !important;
            object-fit: cover !important;
            border-radius: 12px;
          }
          `}</style>
        </div>
      );
    },
  },
  {
    id: "roomchat",
    category: "Room chat",
    title: "RoomChat",
    src: "/assets/projects-screenshots/ChatRoom/Home.jpg",
    screenshots: ["Home.jpg", "Message.jpg", "userOnline.png", "Icon.png"],
    live: "",
    github:"https://github.com/swnnmt/chat-app",
    skills: {
      frontend: [
        PROJECT_SKILLS.js, 
        PROJECT_SKILLS.react, 
        PROJECT_SKILLS.vite],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.mongo
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
          RoomChat is the perfect place to send anonymous messages. RoomChat focuses on keeping everything
          safe and secure. Whether you&apos;re sharing secrets, giving feedback
          or just having fun. Say whatever you want,
          without worry.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <div className="slideshow-container img">
          <SlideShow
            images={[
              `${BASE_PATH}/ChatRoom/Home.jpg`,
              `${BASE_PATH}/ChatRoom/Chat.jpg`,
              `${BASE_PATH}/ChatRoom/Friend.jpg`,
               `${BASE_PATH}/ChatRoom/Notification.jpg`,
              `${BASE_PATH}/ChatRoom/Icon.jpg`,
            ]}
          />
            <style jsx global>{`
          .slideshow-container img {
            width: 95% !important;
            height: 500px !important;
            object-fit: cover !important;
            border-radius: 12px;
          }
          `}</style>
          </div>

        </div>
      );
    },
  },
 
   {
    id: "campverse",
    category: "Campverse",
    title: "Campverse",
    src: "/assets/projects-screenshots/campverse/customer/home.jpg",
    screenshots: ["landing.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.js,
      ],
      backend: [
        PROJECT_SKILLS.docker,
        PROJECT_SKILLS.spring,
        PROJECT_SKILLS.mysql,
      ],
    },
    live: "",
    github: "https://github.com/dminhtan03/EXE_FE",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Campverse — Explore. Experience. Escape the Ordinary.
          </TypographyP>
          <TypographyP className="font-mono ">
          Campverse is a comprehensive web platform connecting travelers with authentic camping and outdoor experiences across Vietnam. 
          It allows users to easily explore campsites, plan trips, and engage directly with partners — while providing admin tools to ensure quality, security, and seamless operations.
        </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
      <div className="Customer">
          <TypographyH3 className="my-4 mt-8">Customer </TypographyH3>
          <p className="font-mono mb-2">
            Customers can discover a diverse range of camping destinations — from mountains and beaches to forest retreats. 
            They can view detailed campsite information, check available amenities, explore photo galleries, and make bookings directly on the platform. 
            Each user has access to a personalized dashboard to track bookings, chat with partners, and receive travel suggestions from the integrated AI Chatbot.
          </p>      
          <div className="slideshow-container">
            <SlideShow
              images={[
              
                `${BASE_PATH}/campverse/customer/home.jpg`,
                `${BASE_PATH}/campverse/customer/intro.jpg`,
                `${BASE_PATH}/campverse/customer/viewCamp.jpg`,
                `${BASE_PATH}/campverse/customer/detail.jpg`,
                `${BASE_PATH}/campverse/customer/booking.jpg`,
                `${BASE_PATH}/campverse/customer/chatbot.jpg`,
              ]}
            />
          </div>
      </div>
      <div className="Admin">
          <TypographyH3 className="my-4 mt-8">Admin</TypographyH3>
          <p className="font-mono mb-2">
            Administrators play a crucial role in ensuring the platform runs smoothly and maintains quality standards. 
            They can manage user accounts, approve or reject new campsite listings, oversee revenue reports, and monitor booking performance. 
            Admins also have tools for handling refund requests, system announcements, and promotional campaigns to grow the Campverse ecosystem.
          </p>
          <div className="slideshow-container">
          <SlideShow
            images={[
              `${BASE_PATH}/campverse/admin/manager.jpg`,
              `${BASE_PATH}/campverse/admin/request.jpg`,
              
            ]}
          />
          </div>
      </div>
      <div className="Staff">
          <TypographyH3 className="my-4 mt-8">Partner </TypographyH3>

          <p className="font-mono mb-2">
             Partners (campsite owners or travel operators) can register their camping locations and manage every aspect of their listings — 
            including descriptions, pricing, availability, and uploaded media. 
            They can monitor booking activity in real time, respond to customer inquiries via chat, and update information dynamically to keep their listings fresh and engaging. 
            This role empowers partners to build trust and attract travelers while maintaining full control of their offerings.
          </p>
          <div className="slideshow-container img">
          <SlideShow
            images={[
              `${BASE_PATH}/campverse/partner/Create.jpg`,
              `${BASE_PATH}/campverse/partner/managercamping.jpg`,
            ]}
          />
          </div>
      </div>
           <style jsx global>{`
          .slideshow-container img {
            width: 95% !important;
            height: 500px !important;
            object-fit: cover !important;
            border-radius: 12px;
          }
          `}</style>
        </div>
        
      );
    },
  },
  {
    id: "portfolio",
    category: "Portfolio",
    title: "My Portfolio",
    src: "/assets/projects-screenshots/portfolio/landing.png",
    screenshots: ["1.png"],
    live: "",
    github:"https://github.com/swnnmt/portfolio",
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.shadcn,
        PROJECT_SKILLS.aceternity,
        PROJECT_SKILLS.framerMotion,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.spline,
      ],
      backend: [],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Welcome to my digital playground, where creativity meets code in the
            dopest way possible.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">
            Beautiful 3D Objects{" "}
          </TypographyH3>
          <p className="font-mono mb-2">
            Did you see that 3D keyboard modal? Yeah! I made that. That
            interactive keyboard is being rendered in 3D on a webpage 🤯, and
            pressing each keycap reveals a skill in a goofy way. It&apos;s like
            typing, but make it art.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/portfolio/landing.png`,
              `${BASE_PATH}/portfolio/skills.png`,
            ]}
          />
          <TypographyH3 className="my-4 ">Space Theme</TypographyH3>
          <p className="font-mono mb-2">
            Dark background + floating particles = out-of-this-world cool.
          </p>
          <SlideShow images={[`${BASE_PATH}/portfolio/navbar.png`]} />
          <TypographyH3 className="my-4 mt-8">Projects</TypographyH3>

          <p className="font-mono mb-2">
            My top personal and freelance projects — no filler, all killer.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/portfolio/projects.png`,
              `${BASE_PATH}/portfolio/project.png`,
            ]}
          />
          <p className="font-mono mb-2 mt-8 text-center">
            This site&apos;s not just a portfolio — it&apos;s a whole vibe.
          </p>
        </div>
      );
    },
  },
];
export default projects;
