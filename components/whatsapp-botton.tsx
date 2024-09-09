import whatsappico from "../public/ico/whatsapp-ico.png";
import Image from 'next/image';
export default function WhatsAppButton() {
    return (
        <div className="flex items-center justify-center fixed bottom-5 right-5 z-10 w-10 h-10">
          <a href="https://wa.me/573015954626?text=Hola%2C%20estoy%20interesado%20en%20obtener%20m%C3%A1s%20informaci%C3%B3n" target="noopener">
            <Image src={whatsappico} alt="whatsapp" />
          </a>
        </div>
    )
};