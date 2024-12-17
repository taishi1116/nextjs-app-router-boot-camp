"use client";

import {
  BoldIcon,
  ItalicIcon,
  ListTodoIcon,
  LucideIcon,
  MessageSquarePlusIcon,
  PrinterIcon,
  Redo2Icon,
  RemoveFormattingIcon,
  SpellCheckIcon,
  UnderlineIcon,
  Undo2Icon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useEditorStore } from "@/store/use-editor-store";
import { Separator } from "@/components/ui/separator";

interface ToolbarButtonProps {
  onClick?: () => void;
  isActive?: boolean;
  icon: LucideIcon;
}

const TollbarButton = ({
  onClick,
  isActive,
  icon: Icon,
}: ToolbarButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "text-sm h-7 min-w-7 items-center justify-center rounded-sm hover:bg-neutral-200/80",
        isActive && "bg-neutral-200/80",
      )}
    >
      <Icon className={"size-4"} />
    </button>
  );
};

export const Toolbar = () => {
  const { editor } = useEditorStore();

  console.log("Toolbar editor", editor);

  const sections: {
    label: string;
    icon: LucideIcon;
    onClick: () => void;
    isActive?: boolean;
  }[][] = [
    [
      {
        label: "undo",
        icon: Undo2Icon,
        onClick: () => editor?.chain().undo().run(),
      },
      {
        label: "redo",
        icon: Redo2Icon,
        onClick: () => editor?.chain().redo().run(),
      },
      {
        label: "print",
        icon: PrinterIcon,
        onClick: () => window.print(),
      },
      {
        label: "spell check",
        icon: SpellCheckIcon,
        onClick: () => {
          const current = editor?.view.dom.getAttribute("spellcheck");
          editor?.view.dom.setAttribute(
            "spellcheck",
            current === "true" ? "false" : "true",
          );
        },
      },
    ],
    [
      {
        label: "bold",
        icon: BoldIcon,
        isActive: editor?.isActive("bold"),
        onClick: () => editor?.chain().focus().toggleBold().run(),
      },
      {
        label: "italic",
        icon: ItalicIcon,
        isActive: editor?.isActive("italic"),
        onClick: () => editor?.chain().focus().toggleItalic().run(),
      },
      {
        label: "underline",
        icon: UnderlineIcon,
        isActive: editor?.isActive("underline"),
        onClick: () => editor?.chain().focus().toggleUnderline().run(),
      },
    ],
    [
      {
        label: "comment",
        icon: MessageSquarePlusIcon,
        isActive: false, // todo enable functionality
        onClick: () => console.log("todo comment"),
      },
      {
        label: "list todo",
        icon: ListTodoIcon,
        isActive: editor?.isActive("taskList"),
        onClick: () => editor?.chain().focus().toggleTaskList().run(),
      },

      {
        label: "remove formatting",
        icon: RemoveFormattingIcon,
        onClick: () => editor?.chain().focus().unsetAllMarks().run(),
      },
    ],
  ];

  return (
    <div
      className={
        "bg-[#f1f4f9] px-2.5 py-0.5 rounded-[24px] min-h-[40px] flex items-center-gap-x-0.5 overflow-x-auto"
      }
    >
      {sections[0].map((section) => (
        <TollbarButton key={section.label} {...section} />
      ))}
      <Separator orientation={"vertical"} className={"h-6 bg-neutral-300"} />
      {/*  todo font family */}
      <Separator orientation={"vertical"} className={"h-6 bg-neutral-300"} />
      {/*  todo heading */}
      <Separator orientation={"vertical"} className={"h-6 bg-neutral-300"} />
      {/*  todo font size*/}
      <Separator orientation={"vertical"} className={"h-6 bg-neutral-300"} />
      {sections[1].map((section) => (
        <TollbarButton key={section.label} {...section} />
      ))}

      {/*  todo text color*/}
      <Separator orientation={"vertical"} className={"h-6 bg-neutral-300"} />
      {/*  todo highlight color*/}
      <Separator orientation={"vertical"} className={"h-6 bg-neutral-300"} />
      {/*  todo link*/}
      {/*  todo image*/}
      {/*  todo image*/}

      {sections[2].map((section) => (
        <TollbarButton key={section.label} {...section} />
      ))}
    </div>
  );
};
