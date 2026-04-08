export interface Quest {
  id: string;
  title: string;
}

export const fitnessQuests: Quest[] = [
  { id: "walk", title: "Go for a walk" },
  { id: "water", title: "Drink water" },
  { id: "stretch", title: "Stretch for 5 minutes" },
  { id: "pushups", title: "Do 10 push-ups" },
  { id: "sleep", title: "Sleep 7+ hours" },
  { id: "plank", title: "30-second plank" },
  { id: "breathing", title: "5-minute deep breathing" },
  { id: "wallsit", title: "Do 15-second wall sit" },
  { id: "rotations", title: "Rotate your neck & shoulders" },
  { id: "dance", title: "Dance to a full song" },
  { id: "touch toes", title: "Touch your toes 10 times" },
  { id: "posture", title: "Fix your posture for 2 minutes" },
  { id: "roomcleanup", title: "Do a quick room clean-up sprint" },
];
