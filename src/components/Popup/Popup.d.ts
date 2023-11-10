export interface IPopupProps {
  popupOpen: boolean;
  setPopupOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
}