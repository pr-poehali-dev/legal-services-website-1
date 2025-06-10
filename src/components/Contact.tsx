import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Свяжитесь с нами
          </h2>
          <p className="text-xl text-gray-600">
            Получите бесплатную консультацию по вашему вопросу
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-lg border-0">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900">
                Отправьте нам сообщение
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Имя *
                  </label>
                  <Input placeholder="Ваше имя" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Телефон *
                  </label>
                  <Input placeholder="+7 (___) ___-__-__" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <Input type="email" placeholder="your@email.com" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Сообщение *
                </label>
                <Textarea
                  placeholder="Опишите вашу ситуацию..."
                  className="min-h-[120px]"
                />
              </div>

              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3">
                <Icon name="Send" className="mr-2 h-4 w-4" />
                Отправить сообщение
              </Button>

              <p className="text-sm text-gray-500 text-center">
                * Обязательные поля
              </p>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Контактная информация
              </h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Телефон</h4>
                    <p className="text-gray-600">+7 (495) 123-45-67</p>
                    <p className="text-gray-600">+7 (495) 123-45-68</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <p className="text-gray-600">info@jurprofi.ru</p>
                    <p className="text-gray-600">consultation@jurprofi.ru</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Адрес</h4>
                    <p className="text-gray-600">
                      г. Москва, ул. Тверская, д. 15
                      <br />
                      офис 401, БЦ "Центр"
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="Clock" className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Режим работы
                    </h4>
                    <p className="text-gray-600">
                      Пн-Пт: 9:00 - 19:00
                      <br />
                      Сб-Вс: 10:00 - 16:00
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-3">
                  <Icon name="Info" className="h-5 w-5 text-blue-600" />
                  <h4 className="font-semibold text-blue-900">
                    Экстренная связь
                  </h4>
                </div>
                <p className="text-blue-800 text-sm">
                  Для срочных вопросов звоните по номеру +7 (495) 123-45-69
                  (круглосуточно)
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
