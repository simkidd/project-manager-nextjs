import {
  AccountBalance,
  AccountBalanceWallet,
  AddShoppingCart,
  Alarm,
  AttachFile,
  AutoGraph,
  BarChart,
  BatteryChargingFull,
  Bookmark,
  BugReport,
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
  HelpOutline,
  Home,
  Info,
  Lightbulb,
  Lock,
  Menu,
  Notifications,
  People,
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
  BrightnessHigh,
} from "@mui/icons-material";

export const getIconComponent = (
  iconName: string,
  textColor?: string,
  fontSize?: string
): JSX.Element => {
  const defaultFontSize = "24px";
  const defaultTextColor = "text-orange-600";

  const iconProps = {
    sx: { fontSize: fontSize || defaultFontSize },
    className: `${defaultTextColor} ${textColor || ""}`.trim(),
  };

  switch (iconName) {
    case "AccountBalance":
      return <AccountBalance {...iconProps} />;
    case "AccountBalanceWallet":
      return <AccountBalanceWallet {...iconProps} />;
    case "AddShoppingCart":
      return <AddShoppingCart {...iconProps} />;
    case "Alarm":
      return <Alarm {...iconProps} />;
    case "AttachFile":
      return <AttachFile {...iconProps} />;
    case "AutoGraph":
      return <AutoGraph {...iconProps} />;
    case "BarChart":
      return <BarChart {...iconProps} />;
    case "BatteryChargingFull":
      return <BatteryChargingFull {...iconProps} />;
    case "Bookmark":
      return <Bookmark {...iconProps} />;
    case "BrightnessHigh":
      return <BrightnessHigh {...iconProps} />;
    case "BugReport":
      return <BugReport {...iconProps} />;
    case "CalendarToday":
      return <CalendarToday {...iconProps} />;
    case "CameraAlt":
      return <CameraAlt {...iconProps} />;
    case "CheckCircle":
      return <CheckCircle {...iconProps} />;
    case "Cloud":
      return <Cloud {...iconProps} />;
    case "Code":
      return <Code {...iconProps} />;
    case "Dashboard":
      return <Dashboard {...iconProps} />;
    case "Delete":
      return <Delete {...iconProps} />;
    case "Edit":
      return <Edit {...iconProps} />;
    case "Email":
      return <Email {...iconProps} />;
    case "Favorite":
      return <Favorite {...iconProps} />;
    case "FileCopy":
      return <FileCopy {...iconProps} />;
    case "Folder":
      return <Folder {...iconProps} />;
    case "Group":
      return <Group {...iconProps} />;
    case "HelpOutline":
      return <HelpOutline {...iconProps} />;
    case "Home":
      return <Home {...iconProps} />;
    case "Info":
      return <Info {...iconProps} />;
    case "Lightbulb":
      return <Lightbulb {...iconProps} />;
    case "Lock":
      return <Lock {...iconProps} />;
    case "Menu":
      return <Menu {...iconProps} />;
    case "Notifications":
      return <Notifications {...iconProps} />;
    case "People":
      return <People {...iconProps} />;
    case "Phone":
      return <Phone {...iconProps} />;
    case "Print":
      return <Print {...iconProps} />;
    case "Save":
      return <Save {...iconProps} />;
    case "Search":
      return <Search {...iconProps} />;
    case "Settings":
      return <Settings {...iconProps} />;
    case "ShoppingCart":
      return <ShoppingCart {...iconProps} />;
    case "ThumbUp":
      return <ThumbUp {...iconProps} />;
    case "TrendingUp":
      return <TrendingUp {...iconProps} />;
    case "Visibility":
      return <Visibility {...iconProps} />;
    case "ElectricalServicesOutlined":
      return <ElectricalServicesOutlined {...iconProps} />;
    case "DensitySmall":
      return <DensitySmall {...iconProps} />;
    default:
      return <></>; // Return an empty element if the icon is not found
  }
};
