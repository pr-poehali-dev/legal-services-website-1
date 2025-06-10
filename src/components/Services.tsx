import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Services = () => {
  const services = [
    {
      icon: "Building",
      title: "Корпоративное право",
      description:
        "Юридическое сопровождение бизнеса, регистрация компаний, договоры, корпоративные споры",
    },
    {
      icon: "Home",
      title: "Недвижимость",
      description:
        "Сделки с недвижимостью, оформление прав собственности, жилищные споры",
    },
    {
      icon: "Users",
      title: "Семейное право",
      description:
        "Развод, раздел имущества, алименты, усыновление, опека и попечительство",
    },
    {
      icon: "Briefcase",
      title: "Трудовое право",
      description:
        "Трудовые споры, увольнения, взыскание заработной платы, защита прав работников",
    },
    {
      icon: "FileText",
      title: "Гражданское право",
      description:
        "Договоры, обязательства, возмещение ущерба, защита прав потребителей",
    },
    {
      icon: "Shield",
      title: "Уголовное право",
      description:
        "Защита в уголовных делах, представительство в суде, консультации по уголовным вопросам",
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Наши услуги
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Предоставляем полный спектр юридических услуг для физических лиц и
            организаций
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md hover:-translate-y-1"
            >
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-blue-700 transition-colors">
                  <Icon name={service.icon} className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900 mb-2">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed text-center">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Не нашли нужную услугу? Свяжитесь с нами для индивидуальной
            консультации
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors">
            Получить консультацию
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
