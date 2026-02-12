import { Link } from 'react-router-dom';
import { ServicesSection, ServicesGrid, ServiceCard, ServiceIcon, ServiceTitle, ServiceDescription, ServiceLink } from './Services-css';

const Services = () => {
  const services = [
    {
      icon: '',
      title: 'Newborn',
      description: 'Sessões delicadas para registrar os primeiros dias do seu bebê com segurança e carinho.',
      link: '/newborn'
    },
    {
      icon: '',
      title: 'Aniversário',
      description: 'Celebre cada idade com fotos que capturam a alegria e emoção deste momento especial.',
      link: '/aniversario'
    },
    {
      icon: '',
      title: 'Família',
      description: 'Retratos familiares que eternizam a conexão e o amor entre seus entes queridos.',
      link: '/familia'
    },
    {
      icon: '',
      title: 'Gestante',
      description: 'Celebre a magia da maternidade com sessões que destacam a beleza única da gestação.',
      link: '/gestante'
    },
    {
      icon: '',
      title: 'Infantil',
      description: 'Capture a espontaneidade e a doçura da infância com fotos divertidas e naturais.',
      link: '/infantil'
    },
    {
      icon: '',
      title: 'Batizado',
      description: 'Registre a importância espiritual deste momento sagrado com elegância e sensibilidade.',
      link: '/batizado'
    }
  ];

  return (
    <ServicesSection>
      <h2>Nossos Serviços</h2>
      <p>Transformamos seus momentos mais preciosos em memórias eternas</p>
      <ServicesGrid>
        {services.map((service, index) => (
          <ServiceCard key={index}>
            <ServiceIcon>{service.icon}</ServiceIcon>
            <ServiceTitle>{service.title}</ServiceTitle>
            <ServiceDescription>{service.description}</ServiceDescription>
            <Link to={service.link} style={{ textDecoration: 'none' }}>
              <ServiceLink>
                Ver Portfólio →
              </ServiceLink>
            </Link>
          </ServiceCard>
        ))}
      </ServicesGrid>
    </ServicesSection>
  );
};

export default Services;
