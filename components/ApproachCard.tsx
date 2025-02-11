"use client";
import { CardStack } from "./ui/CardStack";

export function ApproachCard() {
  return (
    <div className="h-[35rem] flex items-center justify-center w-full py-7 sm:py-20">
      <CardStack items={CARDS} />
    </div>
  );
}

const CARDS = [
  {
    id: 0,
    heading: "Planning and Brainstorming",
    content: (
      <p>
        Once we align on the plan, I cue my lofi playlist and dive into coding.
        From brainstorming the initial sketches to refining every detail, I’ll
        keep you in the loop every step of the way. During this phase, I’m
        thinking ahead, mapping out what we want to achieve and how we’ll get
        there—balancing user experience with clean code. The focus is on
        creating a solid foundation that will guide the entire project.
      </p>
    ),
  },
  {
    id: 1,
    heading: "Development & Progress Update",
    content: (
      <p>
        As development takes shape, I stay focused on translating our plan into
        something tangible. With every line of code, I keep the big picture in
        mind while obsessing over the small details. It’s a blend of creativity
        and logic—finding solutions to challenges while keeping things elegant
        and efficient. And while I’m immersed in the process, I’ll make sure
        you’re never left in the dark. Whether it’s an exciting milestone or a
        tweak that needs attention, you’ll get regular updates on progress, so
        we stay on track together.
      </p>
    ),
  },
  {
    id: 2,
    heading: "Testing & Deployment",
    content: (
      <p>
        Testing is where the magic happens. I shift from building to
        refining—troubleshooting bugs, making sure everything runs smoothly, and
        checking that everything meets the expectations we set in the planning
        phase. It’s also the moment to think about how the project will scale or
        adapt in the future. Once the system is solid, I’ll prepare for
        deployment, ensuring it’s seamless and ready for the world. And once
        it’s live, you’ll get the final confirmation, knowing that everything
        was put in place with care.
      </p>
    ),
  },
];
