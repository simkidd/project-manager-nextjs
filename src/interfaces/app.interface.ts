export type AppType = {
  openSideBarProps: {
    openSideBar: boolean;
    setOpenSideBar: React.Dispatch<React.SetStateAction<boolean>>;
  };
  openModalProps: {
    openModal: boolean;
    setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  };
  openIconModalProps: {
    openIconModal: boolean;
    setOpenIconModal: React.Dispatch<React.SetStateAction<boolean>>;
  };
  allIconsDataProps: {
    allIconsData: IconData[];
    setAllIconsData: React.Dispatch<React.SetStateAction<IconData[]>>;
  };
  selectedIconProps: {
    selectedIcon: IconData | null;
    setSelectedIcon: React.Dispatch<React.SetStateAction<IconData | null>>;
  };
};

export interface IconData {
  id: number;
  name: string;
  icon: React.ReactNode;
  isSelected: boolean;
}
