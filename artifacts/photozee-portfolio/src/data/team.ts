export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  speciality: string;
  experience: number;
}

export const team: TeamMember[] = [
  {
    id: "zee-ahmed",
    name: "Zee Ahmed",
    role: "Lead Photographer & Director",
    bio: "With an eye for the cinematic and a heart for human connection, Zee founded PhotoZee to redefine luxury event photography. His signature style blends fine art with raw emotion.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
    speciality: "Cinematic Portraits",
    experience: 10
  },
  {
    id: "priya-kapoor",
    name: "Priya Kapoor",
    role: "Senior Videographer",
    bio: "Priya brings a documentary filmmaker's intuition to every event. She specializes in crafting narratives that let viewers feel the authentic energy of the moment.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80",
    speciality: "Documentary Wedding Films",
    experience: 8
  },
  {
    id: "rahul-mehta",
    name: "Rahul Mehta",
    role: "Drone Specialist & Editor",
    bio: "A master of the skies and the editing suite. Rahul ensures our films have breathtaking scale and perfect pacing.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80",
    speciality: "Aerial Cinematography & Color Grading",
    experience: 6
  },
  {
    id: "ananya-singh",
    name: "Ananya Singh",
    role: "Photography Assistant & Colorist",
    bio: "Ananya's meticulous attention to detail ensures every final image reflects the premium aesthetic PhotoZee is known for.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
    speciality: "Retouching & Lighting",
    experience: 4
  }
];
