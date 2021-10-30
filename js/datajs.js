maxIdSection = 6;
datasection = [
    { id: 1, name: "Канцелярия", sort: 1, status: 1 },
    { id: 2, name: "Продукты питания", sort: 1, status: 1 },
    { id: 3, name: "Мода", sort: 1, status: 1 },
    { id: 4, name: "Бижутерия", sort: 1, status: 1 },
    { id: 5, name: "Мебель и интерьер", sort: 1, status: 1 },
    { id: 6, name: "Косметика", sort: 1, status: 1 }
];

function Section(id, name, sort, status) {
    this.id = id;
    this.name = name;
    this.sort = sort;
    this.status = status ? 1 : 0;
}
maxIdCategory = 30;
datacategory = [{ id: 1, name: "Бумага для печати", section: 1, sort: 1, status: 1 },
    { id: 2, name: "Письменные принадлежности", section: 1, sort: 1, status: 1 },
    { id: 3, name: "Степлеры, и пр.", section: 1, sort: 1, status: 1 },
    { id: 4, name: "Чернила", section: 1, sort: 1, status: 1 },
    { id: 5, name: "Кондитерские изделия", section: 2, sort: 1, status: 1 },
    { id: 6, name: "Хлеб", section: 2, sort: 1, status: 1 },
    { id: 7, name: "Мясо", section: 2, sort: 1, status: 1 },
    { id: 8, name: "Колбасы", section: 2, sort: 1, status: 1 },
    { id: 9, name: "Сыры", section: 2, sort: 1, status: 1 },
    { id: 10, name: "Консервы", section: 2, sort: 1, status: 1 },
    { id: 11, name: "Мужская одежда", section: 3, sort: 1, status: 1 },
    { id: 12, name: "Женская одежда", section: 3, sort: 1, status: 1 },
    { id: 13, name: "Мужская обувь", section: 3, sort: 1, status: 1 },
    { id: 14, name: "Женская обувь", section: 3, sort: 1, status: 1 },
    { id: 15, name: "Детская одежда и обувь", section: 3, sort: 1, status: 1 },
    { id: 16, name: "Кольцы", section: 4, sort: 1, status: 1 },
    { id: 17, name: "Серьги", section: 4, sort: 1, status: 1 },
    { id: 18, name: "Колье", section: 4, sort: 1, status: 1 },
    { id: 19, name: "Письменные столы, парты", section: 5, sort: 1, status: 1 },
    { id: 20, name: "Компьютерные столы", section: 5, sort: 1, status: 1 },
    { id: 21, name: "Диваны и кровати", section: 5, sort: 1, status: 1 },
    { id: 22, name: "Шкафы", section: 5, sort: 1, status: 1 },
    { id: 23, name: "Кресла и стулья", section: 5, sort: 1, status: 1 },
    { id: 24, name: "Комоды и тумбы", section: 5, sort: 1, status: 1 },
    { id: 25, name: "Детская мебель", section: 5, sort: 1, status: 1 },
    { id: 26, name: "Интерьерные элементы", section: 5, sort: 1, status: 1 },
    { id: 27, name: "Искуственные цветы", section: 5, sort: 1, status: 1 },
    { id: 28, name: "Эксперементальная косметика", section: 6, sort: 1, status: 1 },
    { id: 29, name: "Косметические средства для женщин", section: 6, sort: 1, status: 1 },
    { id: 30, name: "Косметические средства для мужчин", section: 6, sort: 1, status: 1 }
];

function Category(id, name, section, sort, status) {
    this.id = id;
    this.name = name;
    this.section = section;
    this.sort = sort;
    this.status = status ? 1 : 0;
}