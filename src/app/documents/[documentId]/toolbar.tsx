import { LucideIcon } from "lucide-react";

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
    <button>
      <Icon />
    </button>
  );
};

export const Toolbar = () => {
  return (
    <div
      className={
        "bg-[#f1f4f9] px-2.5 py-0.5 rounded-[24px] min-h-[40px] flex items-center-gap-x-0.5 overflow-x-auto"
      }
    >
      toolbar
    </div>
  );
};
