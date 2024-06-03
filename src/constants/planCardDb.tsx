import ArcadeIcon from "../assets/icons/ArcadeIcon";
import AdvancedIcon from "../assets/icons/AdvancedIcon";
import ProIcon from "../assets/icons/ProIcon";

interface Card {
    id: string;
    text: string;
    price: number;
    icon: any;
  }

interface Add {
    id: string;
    text: string;
    paragraph: string;
    price: number;
}  

export const cardsMonthly: Card[] = [
    { id: "1", text: "Arcade", price: 9, icon: <ArcadeIcon /> },
    { id: "2", text: "Advanced", price: 12, icon: <AdvancedIcon /> },
    { id: "3", text: "Pro", price: 15, icon: <ProIcon /> },
  ]

export const cardsYearly: Card[] = [
    { id: "4", text: "Arcade", price: 90, icon: <ArcadeIcon /> },
    { id: "5", text: "Advanced", price: 120, icon: <AdvancedIcon /> },
    { id: "6", text: "Pro", price: 150, icon: <ProIcon /> },
  ]

 export const AddOns: Add[] = [
   {id: "7", text: "Online Service", paragraph: "Access to multiplayer games", price: 1},
   {id: "8", text: "Larger storage", paragraph: "Extra 1TB of cloud save", price: 2},
   {id: "9", text: "Customizable profile", paragraph: "Custom theme on your profile", price: 3},
 ]