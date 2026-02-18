import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

interface Vaccination {
  name: string;
  date: string;
  nextDate: string;
}

interface VetRecord {
  title: string;
  date: string;
  clinic: string;
}

const defaultVaccinations: Vaccination[] = [
  { name: "Бешенство", date: "15.03.2025", nextDate: "15.03.2026" },
  { name: "Комплексная (DHPPi)", date: "10.01.2025", nextDate: "10.01.2026" },
  { name: "Лептоспироз", date: "10.01.2025", nextDate: "10.07.2025" },
];

const defaultVetRecords: VetRecord[] = [
  { title: "Плановый осмотр", date: "20.01.2026", clinic: "ВетДруг" },
  { title: "Чистка зубов", date: "05.12.2025", clinic: "Айболит+" },
  { title: "Обработка от паразитов", date: "01.11.2025", clinic: "ВетДруг" },
];

const PetProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [pet, setPet] = useState({
    name: "Барни",
    breed: "Золотистый ретривер",
    age: "3 года",
    weight: "32 кг",
    gender: "Мальчик",
    color: "Золотистый",
    chip: "643 094 100 123 456",
    about: "Добрый и ласковый пёс, обожает плавать и приносить мяч. Дружелюбен к другим собакам и детям. Любит долгие прогулки в парке.",
    photo: "https://cdn.poehali.dev/projects/6a6620d1-f72f-48c6-92b0-88acd9c4645c/files/f28f31dd-1c8b-4511-a479-7e482b742613.jpg",
  });

  const [editForm, setEditForm] = useState(pet);

  const handleSave = () => {
    setPet(editForm);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditForm(pet);
    setIsEditing(false);
  };

  const traits = ["Дружелюбный", "Активный", "Любит воду", "Обучен командам", "Ладит с детьми"];

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl">🐾</span>
            <span className="text-lg font-bold text-foreground">ГуляйПёс</span>
          </Link>
          <Button
            variant={isEditing ? "outline" : "default"}
            size="sm"
            onClick={() => (isEditing ? handleCancel() : setIsEditing(true))}
            className={isEditing ? "" : "bg-primary text-primary-foreground hover:bg-primary/90"}
          >
            <Icon name={isEditing ? "X" : "Pencil"} size={16} className="mr-1.5" />
            {isEditing ? "Отмена" : "Редактировать"}
          </Button>
        </div>
      </header>

      <main className="pt-24 pb-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-[280px_1fr] gap-8">
            <div className="space-y-5 animate-fade-in-up">
              <div className="relative group">
                <div className="rounded-3xl overflow-hidden shadow-lg aspect-square">
                  <img
                    src={pet.photo}
                    alt={pet.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                {isEditing && (
                  <button className="absolute inset-0 bg-black/40 rounded-3xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Icon name="Camera" size={32} className="text-white" />
                  </button>
                )}
              </div>

              <Card className="border-0 shadow-sm">
                <CardContent className="p-5">
                  <h3 className="text-sm font-semibold text-foreground mb-3">Характер</h3>
                  <div className="flex flex-wrap gap-2">
                    {traits.map((trait) => (
                      <Badge key={trait} variant="secondary" className="text-xs font-normal">
                        {trait}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm">
                <CardContent className="p-5">
                  <h3 className="text-sm font-semibold text-foreground mb-3">Статистика</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Прогулки</span>
                      <span className="text-sm font-medium text-foreground">247</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Друзья</span>
                      <span className="text-sm font-medium text-foreground">18</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">События</span>
                      <span className="text-sm font-medium text-foreground">12</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              {isEditing ? (
                <Card className="border-0 shadow-sm">
                  <CardContent className="p-6 space-y-4">
                    <h2 className="text-xl font-bold text-foreground">Редактирование профиля</h2>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm text-muted-foreground mb-1.5 block">Кличка</label>
                        <Input
                          value={editForm.name}
                          onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                        />
                      </div>
                      <div>
                        <label className="text-sm text-muted-foreground mb-1.5 block">Порода</label>
                        <Input
                          value={editForm.breed}
                          onChange={(e) => setEditForm({ ...editForm, breed: e.target.value })}
                        />
                      </div>
                      <div>
                        <label className="text-sm text-muted-foreground mb-1.5 block">Возраст</label>
                        <Input
                          value={editForm.age}
                          onChange={(e) => setEditForm({ ...editForm, age: e.target.value })}
                        />
                      </div>
                      <div>
                        <label className="text-sm text-muted-foreground mb-1.5 block">Вес</label>
                        <Input
                          value={editForm.weight}
                          onChange={(e) => setEditForm({ ...editForm, weight: e.target.value })}
                        />
                      </div>
                      <div>
                        <label className="text-sm text-muted-foreground mb-1.5 block">Пол</label>
                        <Input
                          value={editForm.gender}
                          onChange={(e) => setEditForm({ ...editForm, gender: e.target.value })}
                        />
                      </div>
                      <div>
                        <label className="text-sm text-muted-foreground mb-1.5 block">Окрас</label>
                        <Input
                          value={editForm.color}
                          onChange={(e) => setEditForm({ ...editForm, color: e.target.value })}
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-sm text-muted-foreground mb-1.5 block">Номер чипа</label>
                      <Input
                        value={editForm.chip}
                        onChange={(e) => setEditForm({ ...editForm, chip: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="text-sm text-muted-foreground mb-1.5 block">О питомце</label>
                      <Textarea
                        value={editForm.about}
                        onChange={(e) => setEditForm({ ...editForm, about: e.target.value })}
                        rows={3}
                      />
                    </div>
                    <Button onClick={handleSave} className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
                      <Icon name="Check" size={16} />
                      Сохранить
                    </Button>
                  </CardContent>
                </Card>
              ) : (
                <>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h1 className="text-3xl font-bold text-foreground">{pet.name}</h1>
                      <Badge className="bg-primary/10 text-primary border-0 font-normal">
                        {pet.gender}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground">{pet.breed} · {pet.age} · {pet.weight}</p>
                  </div>

                  <Card className="border-0 shadow-sm">
                    <CardContent className="p-6">
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                        {[
                          { icon: "Dog", label: "Порода", value: pet.breed },
                          { icon: "Calendar", label: "Возраст", value: pet.age },
                          { icon: "Scale", label: "Вес", value: pet.weight },
                          { icon: "Palette", label: "Окрас", value: pet.color },
                        ].map((item) => (
                          <div key={item.label}>
                            <div className="flex items-center gap-1.5 mb-1">
                              <Icon name={item.icon} size={14} className="text-muted-foreground" />
                              <span className="text-xs text-muted-foreground">{item.label}</span>
                            </div>
                            <p className="text-sm font-medium text-foreground">{item.value}</p>
                          </div>
                        ))}
                      </div>
                      {pet.chip && (
                        <div className="mt-4 pt-4 border-t">
                          <div className="flex items-center gap-1.5 mb-1">
                            <Icon name="Cpu" size={14} className="text-muted-foreground" />
                            <span className="text-xs text-muted-foreground">Чип</span>
                          </div>
                          <p className="text-sm font-mono text-foreground">{pet.chip}</p>
                        </div>
                      )}
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-sm">
                    <CardContent className="p-6">
                      <h3 className="text-sm font-semibold text-foreground mb-2">О питомце</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{pet.about}</p>
                    </CardContent>
                  </Card>
                </>
              )}

              <Tabs defaultValue="vaccinations" className="w-full">
                <TabsList className="w-full bg-muted/60">
                  <TabsTrigger value="vaccinations" className="flex-1 gap-1.5 text-xs sm:text-sm">
                    <Icon name="Syringe" size={14} />
                    Прививки
                  </TabsTrigger>
                  <TabsTrigger value="records" className="flex-1 gap-1.5 text-xs sm:text-sm">
                    <Icon name="FileText" size={14} />
                    Записи
                  </TabsTrigger>
                  <TabsTrigger value="vet" className="flex-1 gap-1.5 text-xs sm:text-sm">
                    <Icon name="Stethoscope" size={14} />
                    Ветеринар
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="vaccinations" className="mt-4">
                  <Card className="border-0 shadow-sm">
                    <CardContent className="p-5 space-y-3">
                      {defaultVaccinations.map((vac) => (
                        <div key={vac.name} className="flex items-center justify-between py-2 border-b last:border-0">
                          <div>
                            <p className="text-sm font-medium text-foreground">{vac.name}</p>
                            <p className="text-xs text-muted-foreground">Сделана: {vac.date}</p>
                          </div>
                          <div className="text-right">
                            <Badge variant="secondary" className="text-xs font-normal">
                              <Icon name="Clock" size={12} className="mr-1" />
                              {vac.nextDate}
                            </Badge>
                          </div>
                        </div>
                      ))}
                      <Button variant="outline" size="sm" className="w-full mt-2 gap-1.5">
                        <Icon name="Plus" size={14} />
                        Добавить прививку
                      </Button>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="records" className="mt-4">
                  <Card className="border-0 shadow-sm">
                    <CardContent className="p-5 space-y-3">
                      {defaultVetRecords.map((rec) => (
                        <div key={rec.title + rec.date} className="flex items-center justify-between py-2 border-b last:border-0">
                          <div>
                            <p className="text-sm font-medium text-foreground">{rec.title}</p>
                            <p className="text-xs text-muted-foreground">{rec.date}</p>
                          </div>
                          <Badge variant="secondary" className="text-xs font-normal">
                            {rec.clinic}
                          </Badge>
                        </div>
                      ))}
                      <Button variant="outline" size="sm" className="w-full mt-2 gap-1.5">
                        <Icon name="Plus" size={14} />
                        Добавить запись
                      </Button>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="vet" className="mt-4">
                  <Card className="border-0 shadow-sm">
                    <CardContent className="p-6 text-center">
                      <div className="w-14 h-14 rounded-full bg-accent/15 flex items-center justify-center mx-auto mb-4">
                        <Icon name="Video" size={24} className="text-accent" />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">Онлайн-консультация</h3>
                      <p className="text-sm text-muted-foreground mb-5 max-w-sm mx-auto">
                        Задайте вопрос ветеринару не выходя из дома. Врачи доступны ежедневно с 9:00 до 21:00.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <Button className="bg-accent text-accent-foreground hover:bg-accent/90 gap-2">
                          <Icon name="Video" size={16} />
                          Видеозвонок
                        </Button>
                        <Button variant="outline" className="gap-2">
                          <Icon name="MessageCircle" size={16} />
                          Написать врачу
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PetProfile;
