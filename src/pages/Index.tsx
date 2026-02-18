import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const features = [
  {
    icon: "Dog",
    title: "Профиль питомца",
    description: "Фото, возраст, порода и вся информация о вашем друге в одном месте",
  },
  {
    icon: "MapPin",
    title: "Поиск рядом",
    description: "Находите собачников и их питомцев по местоположению и характеристикам",
  },
  {
    icon: "Users",
    title: "Сообщества",
    description: "Группы по породам, интересам и районам для общения собачников",
  },
  {
    icon: "Calendar",
    title: "События и встречи",
    description: "Совместные прогулки, игры и мероприятия для собак и хозяев",
  },
  {
    icon: "Syringe",
    title: "Здоровье питомца",
    description: "Календарь прививок, ветеринарные записи и полезные советы",
  },
  {
    icon: "Stethoscope",
    title: "Онлайн-ветеринар",
    description: "Консультации с ветеринарами и интеграция с клиниками города",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🐾</span>
            <span className="text-lg font-bold text-foreground">ГуляйПёс</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Возможности</a>
            <a href="#community" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Сообщество</a>
            <a href="#health" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Здоровье</a>
          </nav>
          <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
            Начать
          </Button>
        </div>
      </header>

      <section className="pt-28 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-1.5 text-sm font-medium mb-6">
                <Icon name="Sparkles" size={16} />
                Приложение для собачников
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
                Всё для вас
                <br />
                <span className="text-primary">и вашего пса</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-md">
                Находите друзей для прогулок, следите за здоровьем питомца и общайтесь с собачниками вашего района.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
                  <Icon name="ArrowRight" size={18} />
                  Присоединиться
                </Button>
                <Button size="lg" variant="outline" className="gap-2">
                  <Icon name="Play" size={18} />
                  Как это работает
                </Button>
              </div>
              <div className="flex items-center gap-6 mt-10">
                <div>
                  <p className="text-2xl font-bold text-foreground">12K+</p>
                  <p className="text-xs text-muted-foreground">Собачников</p>
                </div>
                <div className="w-px h-10 bg-border" />
                <div>
                  <p className="text-2xl font-bold text-foreground">8K+</p>
                  <p className="text-xs text-muted-foreground">Питомцев</p>
                </div>
                <div className="w-px h-10 bg-border" />
                <div>
                  <p className="text-2xl font-bold text-foreground">500+</p>
                  <p className="text-xs text-muted-foreground">Событий</p>
                </div>
              </div>
            </div>
            <div className="relative animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://cdn.poehali.dev/projects/6a6620d1-f72f-48c6-92b0-88acd9c4645c/files/f07f7ffd-579c-47ca-a1e9-1c76b51896f0.jpg"
                  alt="Счастливая собака в парке"
                  className="w-full h-[400px] lg:h-[500px] object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-card rounded-2xl shadow-lg p-4 flex items-center gap-3 animate-scale-in" style={{ animationDelay: "0.5s" }}>
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                  <Icon name="Heart" size={20} className="text-accent" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Новая прогулка</p>
                  <p className="text-xs text-muted-foreground">Парк Горького, 18:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-20 px-6 bg-muted/40">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Всё в одном приложении
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Удобные инструменты для счастливой жизни с питомцем
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((feature, i) => (
              <Card
                key={feature.title}
                className="border-0 shadow-sm hover:shadow-md transition-all duration-300 bg-card animate-fade-in-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                    <Icon name={feature.icon} size={24} className="text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="community" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-3xl overflow-hidden shadow-xl">
              <img
                src="https://cdn.poehali.dev/projects/6a6620d1-f72f-48c6-92b0-88acd9c4645c/files/81602793-d189-46c8-aa28-cbe2b78a50aa.jpg"
                alt="Собаки играют вместе"
                className="w-full h-[380px] object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Найдите друзей
                <br />
                <span className="text-primary">для вашего пса</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Познакомьтесь с хозяевами собак в вашем районе, организуйте совместные прогулки и создайте настоящее сообщество любителей четвероногих.
              </p>
              <div className="space-y-4">
                {[
                  { icon: "Search", text: "Поиск по породе, возрасту и району" },
                  { icon: "MessageCircle", text: "Чат и обмен фотографиями питомцев" },
                  { icon: "Star", text: "Рейтинг площадок и мест для прогулок" },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-accent/15 flex items-center justify-center flex-shrink-0">
                      <Icon name={item.icon} size={16} className="text-accent" />
                    </div>
                    <p className="text-sm text-foreground">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="health" className="py-20 px-6 bg-primary/5">
        <div className="container mx-auto max-w-3xl text-center">
          <div className="w-16 h-16 rounded-full bg-primary/15 flex items-center justify-center mx-auto mb-6">
            <Icon name="Shield" size={28} className="text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Здоровье под контролем
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-10 max-w-xl mx-auto">
            Ведите историю прививок, получайте напоминания о визитах к ветеринару и консультируйтесь с врачами онлайн.
          </p>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { icon: "CalendarCheck", value: "Прививки", label: "Автоматические напоминания" },
              { icon: "FileText", value: "Записи", label: "Вся история в одном месте" },
              { icon: "Video", value: "Онлайн", label: "Консультации с ветеринаром" },
            ].map((item) => (
              <Card key={item.value} className="border-0 shadow-sm bg-card">
                <CardContent className="p-6 text-center">
                  <Icon name={item.icon} size={28} className="text-primary mx-auto mb-3" />
                  <p className="font-semibold text-foreground mb-1">{item.value}</p>
                  <p className="text-xs text-muted-foreground">{item.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Начните прямо сейчас
          </h2>
          <p className="text-muted-foreground mb-8">
            Присоединяйтесь к сообществу заботливых хозяев
          </p>
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
            <Icon name="PawPrint" size={20} />
            Создать профиль питомца
          </Button>
        </div>
      </section>

      <footer className="border-t py-10 px-6">
        <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xl">🐾</span>
            <span className="font-semibold text-foreground">ГуляйПёс</span>
          </div>
          <p className="text-sm text-muted-foreground">© 2026 ГуляйПёс. Для тех, кто любит собак.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
