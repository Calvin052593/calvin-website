import NavbarV2 from "@/components/v2/NavbarV2";
import HeroV2 from "@/components/v2/HeroV2";
import StatementV2 from "@/components/v2/StatementV2";
import ClientShowcaseV2 from "@/components/v2/ClientShowcaseV2";
import ServicesV2 from "@/components/v2/ServicesV2";
import EventsGalleryV2 from "@/components/v2/EventsGalleryV2";
import ContactV2 from "@/components/v2/ContactV2";
import FooterV2 from "@/components/v2/FooterV2";

export const metadata = {
  title: "Calvin Sdn Bhd | Professional Event Organiser — V2",
  description: "Calvin Sdn Bhd — Malaysia's premier event organiser for corporate, education, and insurance sectors.",
};

export default function HomeV2() {
  return (
    <>
      <NavbarV2 />
      <main>
        <HeroV2 />
        <StatementV2 />
        <ClientShowcaseV2 />
        <ServicesV2 />
        <EventsGalleryV2 />
        <ContactV2 />
      </main>
      <FooterV2 />
    </>
  );
}
