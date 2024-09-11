import { useAppContext } from "@/contexts/AppContext";
import { IconData } from "@/interfaces/app.interface";
import {
  AccountBalance,
  AccountBalanceWallet,
  AddShoppingCart,
  Alarm,
  AttachFile,
  BarChart,
  BatteryAlert,
  Bookmark,
  BrightnessHigh,
  CalendarToday,
  CameraAlt,
  CheckCircle,
  Cloud,
  Code,
  Dashboard,
  Delete,
  Edit,
  Email,
  Favorite,
  FileCopy,
  Folder,
  Group,
  Help,
  Home,
  Lightbulb,
  Lock,
  Menu,
  Notifications,
  Phone,
  Print,
  Save,
  Search,
  Settings,
  ShoppingCart,
  ThumbUp,
  TrendingUp,
  Visibility,
  ElectricalServicesOutlined,
  DensitySmall,
} from "@mui/icons-material";

export const allIconsArray: IconData[] = [
  {
    id: 1,
    icon: <AccountBalance className="text-[23px]" />,
    name: "AccountBalance",
    isSelected: false,
  },
  {
    id: 2,
    icon: <AccountBalanceWallet className="text-[23px]" />,
    name: "AccountBalanceWallet",
    isSelected: false,
  },
  {
    id: 3,
    icon: <AddShoppingCart className="text-[23px]" />,
    name: "AddShoppingCart",
    isSelected: false,
  },
  {
    id: 4,
    icon: <Alarm className="text-[23px]" />,
    name: "Alarm",
    isSelected: false,
  },
  {
    id: 5,
    icon: <AttachFile className="text-[23px]" />,
    name: "AttachFile",
    isSelected: false,
  },
  {
    id: 6,
    icon: <BarChart className="text-[23px]" />,
    name: "BarChart",
    isSelected: false,
  },
  {
    id: 7,
    icon: <BatteryAlert className="text-[23px]" />,
    name: "BatteryAlert",
    isSelected: false,
  },
  {
    id: 8,
    icon: <Bookmark className="text-[23px]" />,
    name: "Bookmark",
    isSelected: false,
  },
  {
    id: 9,
    icon: <BrightnessHigh className="text-[23px]" />,
    name: "BrightnessHigh",
    isSelected: false,
  },
  {
    id: 10,
    icon: <CalendarToday className="text-[23px]" />,
    name: "CalendarToday",
    isSelected: false,
  },
  {
    id: 11,
    icon: <CameraAlt className="text-[23px]" />,
    name: "CameraAlt",
    isSelected: false,
  },
  {
    id: 12,
    icon: <CheckCircle className="text-[23px]" />,
    name: "CheckCircle",
    isSelected: false,
  },
  {
    id: 13,
    icon: <Cloud className="text-[23px]" />,
    name: "Cloud",
    isSelected: false,
  },
  {
    id: 14,
    icon: <Code className="text-[23px]" />,
    name: "Code",
    isSelected: false,
  },
  {
    id: 15,
    icon: <Dashboard className="text-[23px]" />,
    name: "Dashboard",
    isSelected: false,
  },
  {
    id: 16,
    icon: <Delete className="text-[23px]" />,
    name: "Delete",
    isSelected: false,
  },
  {
    id: 17,
    icon: <Edit className="text-[23px]" />,
    name: "Edit",
    isSelected: false,
  },
  {
    id: 18,
    icon: <Email className="text-[23px]" />,
    name: "Email",
    isSelected: false,
  },
  {
    id: 19,
    icon: <Favorite className="text-[23px]" />,
    name: "Favorite",
    isSelected: false,
  },
  {
    id: 20,
    icon: <FileCopy className="text-[23px]" />,
    name: "FileCopy",
    isSelected: false,
  },
  {
    id: 21,
    icon: <Folder className="text-[23px]" />,
    name: "Folder",
    isSelected: false,
  },
  {
    id: 22,
    icon: <Group className="text-[23px]" />,
    name: "Group",
    isSelected: false,
  },
  {
    id: 23,
    icon: <Help className="text-[23px]" />,
    name: "Help",
    isSelected: false,
  },
  {
    id: 24,
    icon: <Home className="text-[23px]" />,
    name: "Home",
    isSelected: false,
  },
  {
    id: 25,
    icon: <Lightbulb className="text-[23px]" />,
    name: "Lightbulb",
    isSelected: false,
  },
  {
    id: 26,
    icon: <Lock className="text-[23px]" />,
    name: "Lock",
    isSelected: false,
  },
  {
    id: 27,
    icon: <Menu className="text-[23px]" />,
    name: "Menu",
    isSelected: false,
  },
  {
    id: 28,
    icon: <Notifications className="text-[23px]" />,
    name: "Notifications",
    isSelected: false,
  },
  {
    id: 29,
    icon: <Phone className="text-[23px]" />,
    name: "Phone",
    isSelected: false,
  },
  {
    id: 30,
    icon: <Print className="text-[23px]" />,
    name: "Print",
    isSelected: false,
  },
  {
    id: 31,
    icon: <Save className="text-[23px]" />,
    name: "Save",
    isSelected: false,
  },
  {
    id: 32,
    icon: <Search className="text-[23px]" />,
    name: "Search",
    isSelected: false,
  },
  {
    id: 33,
    icon: <Settings className="text-[23px]" />,
    name: "Settings",
    isSelected: false,
  },
  {
    id: 34,
    icon: <ShoppingCart className="text-[23px]" />,
    name: "ShoppingCart",
    isSelected: false,
  },
  {
    id: 35,
    icon: <ThumbUp className="text-[23px]" />,
    name: "ThumbUp",
    isSelected: false,
  },
  {
    id: 36,
    icon: <TrendingUp className="text-[23px]" />,
    name: "TrendingUp",
    isSelected: false,
  },
  {
    id: 37,
    icon: <Visibility className="text-[23px]" />,
    name: "Visibility",
    isSelected: false,
  },
  {
    id: 38,
    icon: <ElectricalServicesOutlined className="text-[23px]" />,
    name: "ElectricalServicesOutlined",
    isSelected: false,
  },
  {
    id: 39,
    icon: <DensitySmall className="text-[23px]" />,
    name: "DensitySmall",
    isSelected: false,
  },
];

const AllIcons = () => {
  const {
    allIconsDataProps: { allIconsData, setAllIconsData },
    openIconModalProps: { setOpenIconModal },
    selectedIconProps: { setSelectedIcon },
  } = useAppContext();

  const handleIconSelection = (iconData: IconData) => {
    setAllIconsData((prevIcons) =>
      prevIcons.map((icon) => {
        if (icon.name === iconData.name) {
          setSelectedIcon(icon);
          return { ...icon, isSelected: true };
        }
        return { ...icon, isSelected: false };
      })
    );

    setOpenIconModal(false);
  };

  return (
    <div className="flex flex-wrap gap-2 text-orange-600 p-3">
      {allIconsData.map((icon, i) => (
        <div
          key={i}
          onClick={() => handleIconSelection(icon)}
          className={`w-9 h-9 shadow-sm border border-slate-50 flex items-center justify-center rounded-lg hover:bg-orange-600 hover:text-white ${
            icon.isSelected
              ? "bg-orange-600 text-white"
              : "bg-white text-orange-600"
          }`}
        >
          {icon.icon}
        </div>
      ))}
    </div>
  );
};

export default AllIcons;
