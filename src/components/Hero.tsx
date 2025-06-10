import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)",
            backgroundSize: "30px 30px",
          }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Профессиональная
              <span className="text-blue-400 block">юридическая помощь</span>
            </h1>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Защитим ваши права и интересы. Более 15 лет успешной практики в
              различных отраслях права.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg"
              >
                Получить консультацию
                <Icon name="ArrowRight" className="ml-2 h-5 w-5" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-slate-900 px-8 py-3 text-lg"
              >
                Наши услуги
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 text-center lg:text-left">
              <div>
                <div className="text-3xl font-bold text-blue-400">500+</div>
                <div className="text-sm text-gray-400">Выигранных дел</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-400">15</div>
                <div className="text-sm text-gray-400">Лет опыта</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-400">98%</div>
                <div className="text-sm text-gray-400">Довольных клиентов</div>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative hidden lg:block">
            <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" className="h-6 w-6 text-green-400" />
                  <span className="text-lg">Бесплатная консультация</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" className="h-6 w-6 text-green-400" />
                  <span className="text-lg">Работаем 24/7</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" className="h-6 w-6 text-green-400" />
                  <span className="text-lg">Гарантия результата</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" className="h-6 w-6 text-green-400" />
                  <span className="text-lg">Конфиденциальность</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
