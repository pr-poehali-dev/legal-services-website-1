import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const About = () => {
  const features = [
    {
      icon: "Award",
      title: "15+ лет опыта",
      description: "Успешная практика с 2009 года",
    },
    {
      icon: "Users",
      title: "Команда экспертов",
      description: "Опытные юристы в различных отраслях",
    },
    {
      icon: "Clock",
      title: "Оперативность",
      description: "Быстрое решение ваших вопросов",
    },
    {
      icon: "Shield",
      title: "Конфиденциальность",
      description: "Полная защита ваших данных",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              О нашей компании
            </h2>

            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              ЮрПрофи — это команда высококвалифицированных юристов с более чем
              15-летним опытом работы. Мы специализируемся на различных отраслях
              права и гордимся тем, что помогаем нашим клиентам решать самые
              сложные правовые вопросы.
            </p>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Наш подход основан на индивидуальном внимании к каждому клиенту,
              глубоком понимании законодательства и стремлении к достижению
              наилучших результатов. Мы верим, что качественная юридическая
              помощь должна быть доступной и понятной.
            </p>

            <div className="flex items-center space-x-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">500+</div>
                <div className="text-sm text-gray-600">Успешных дел</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">98%</div>
                <div className="text-sm text-gray-600">
                  Положительных исходов
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">24/7</div>
                <div className="text-sm text-gray-600">Поддержка клиентов</div>
              </div>
            </div>
          </div>

          {/* Right Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border-0 shadow-md hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon
                      name={feature.icon}
                      className="h-6 w-6 text-blue-600"
                    />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
