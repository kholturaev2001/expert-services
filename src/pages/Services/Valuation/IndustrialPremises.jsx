import ServiceCard from "../../../components/Card/ServiceCard";
import HeadBreadcrumb from "../../../components/HeadBreadcrumb";
import s_img from "../../../assets/images/services/valuation/estates/industrial_premises.jpeg";
import Title from "../../../components/Typography/Title";
import Description from "../../../components/Typography/Description";
import LiColored from "../../../components/Typography/LiColored";
import Title2 from "../../../components/Typography/Title2";

const IndustrialPremises = () => {
  return (
    <div>
      <HeadBreadcrumb
        items={[
          {
            title: "Оценка",
          },
          {
            title: "Недвижимость",
          },
          {
            title: "Коммерческая",
          },
          {
            title: "Производственное помещение",
          },
        ]}
      />
      <ServiceCard img={s_img} title="Оценка производственных помещений" />
      <Title>Цели проведения оценки</Title>
      <Description>
        Оценка промышленных зданий, цехов или комплекса производственных
        помещений проводится для достижения следующих целей:
      </Description>
      <LiColored>
        Отчуждение объекта недвижимости рассматриваемой категории в пользу
        третьих лиц по рыночной цене на основании договора купли-продажи.
      </LiColored>
      <LiColored>
        Оформление залога для получения кредита в банковском учреждении, либо
        при его рефинансировании.
      </LiColored>
      <LiColored>
        Изъятие объекта недвижимости кредитной организацией для реализации его
        на торгах по ликвидационной стоимости при нарушении условий кредитного
        договора со стороны заёмщика.
      </LiColored>
      <LiColored>
        Постановка нового здания или сооружения на баланс предприятия, внесение
        стоимости активов в уставной капитал.
      </LiColored>
      <LiColored>
        Раздел собственности между акционерами компании или бывшими супругами
        при расторжении брака.
      </LiColored>
      <LiColored>
        Расчёт суммы ущерба при заливе, пожаре или других негативных факторах,
        форс-мажорных обстоятельствах, возникших по вине третьих лиц.
      </LiColored>
      <LiColored>
        Решение имущественных споров, предъявление финансовых претензий в
        досудебном порядке или при подаче искового заявления.
      </LiColored>
      <Description>
        В зависимости от целей проведения оценки рассчитывается рыночная,
        залоговая или ликвидационная стоимость здания или сооружения.
      </Description>
      <Title>Алгоритм действий для экспертизы промышленных зданий</Title>
      <Description>
        При обращении заказчика в нашу компанию уполномоченный специалист
        выполняет следующие этапы:
      </Description>
      <LiColored>
        Проведение устной консультации по телефону или встреча в офисе,
        составление технического задания.
      </LiColored>
      <LiColored>
        Анализ переданной от заинтересованного лица правоустанавливающей или
        проектной документации.
      </LiColored>
      <LiColored>
        Расчёт стоимости оценочных работ, подписание официального договора.
      </LiColored>
      <LiColored>
        Мониторинг рынка аналогичной недвижимости в регионе, проверка средних
        цен на данные промышленные здания.
      </LiColored>
      <LiColored>
        Выезд на место, проведение визуального обследования, выполнение
        фотофиксации.
      </LiColored>
      <LiColored>
        Проверка договоров с арендаторами, вычисление среднегодовой доходности
        от сдачи производственных площадей в аренду.
      </LiColored>
      <LiColored>
        Формирование рыночной цены, определение понижающих или повышающих
        коэффициентов.
      </LiColored>
      <LiColored>
        Расчёт рыночной, залоговой или ликвидационной стоимости, рекомендуемой
        арендной платы.
      </LiColored>
      <LiColored>Оформление официального отчёта установленной формы.</LiColored>
      <LiColored>Передача готовой работы заказчику.</LiColored>
      <Description>
        В случае, если обследованию подвергается старое здание с высокой
        степенью износа, может потребоваться привлечение эксперта для проведения
        инструментального контроля с выдачей соответствующего заключения,
        свидетельствующего о возможности последующей эксплуатации сооружения, а
        также с рекомендациями о проведении ремонтно-восстановительных работ.
      </Description>
      <Title>Факторы, влияющие на оценку</Title>
      <Description>
        Конечная стоимость производственных помещений, которая рассчитывается по
        результатам проведения оценочных мероприятий, зависит от ряда прямых и
        косвенных факторов:
      </Description>
      <LiColored>Место расположения объекта.</LiColored>
      <LiColored>
        Удалённость здания от транспортных узлов, автомобильных трасс,
        железнодорожных путей.
      </LiColored>
      <LiColored>Общая площадь производственных помещений.</LiColored>
      <LiColored>
        Высота цехов, величина пролёта и другие объёмно-планировочные
        показатели.
      </LiColored>
      <LiColored>Материал несущих и ограждающих конструкций.</LiColored>
      <LiColored>
        Наличие отопления, размер выделенной электрической мощности.
      </LiColored>
      <LiColored>
        Состояние сооружения, уровень физического износа конструкций.
      </LiColored>
      <LiColored>
        Наличие кран-балок, рельсовых тележек и другого грузоподъёмного или
        внутрицехового транспортного оборудования.
      </LiColored>
      <LiColored>Категория объекта, особенности технологии.</LiColored>
      <LiColored>
        Наличие арендаторов, средняя доходность правообладателя.
      </LiColored>
      <LiColored>
        Сумма понесённых расходов на строительство, отделку помещений и
        техническое оснащение производства.
      </LiColored>
      <LiColored>
        Форма собственности, зарегистрированная за заинтересованным лицом.
      </LiColored>
      <Description>
        Мы рассчитываем реальную цену объекта с учётом всех описанных выше
        факторов, а также текущей рыночной ситуации. Клиенту следует учесть, что
        срок действия отчёта ограничен, так как с течением времени может
        поменяться экономическая ситуация, что приведёт к корректировке
        стоимости производственных помещений.
      </Description>
      <Title>Особенности оценки помещения</Title>
      <Description>
        При выполнении обследования промышленного объекта или комплекса
        производственных помещений наши сотрудники учитывают следующие факторы:
      </Description>
      <LiColored>
        Так как большинство производственных зданий относится к уникальным
        большепролетным сооружениям, перед выездом на объект требуется детальное
        изучение рабочего проекта, а также заключения экспертизы.
      </LiColored>
      <LiColored>
        При обследовании старого объекта недвижимости рекомендуется привлечение
        специалиста для проведения комплексной экспертизы состояния конструкций.
      </LiColored>
      <LiColored>
        Оценка цехов проводится с учётом анализа прилегающей инфраструктуры –
        транспортных путей, складских помещений или площадок, а также
        перспективы развития бизнеса или индустриального кластера, что
        существенно сказывается на стоимости объектов недвижимости.
      </LiColored>
      <Description>
        При проведении экспертизы промышленной недвижимости мы учитываем все
        нюансы, что позволяет нам рассчитать не только стоимость здания, но
        также арендную ставку и размер налогового обременения, выдать
        заинтересованному лицу рекомендации по их возможной корректировке.
      </Description>
      <Title2>Результаты оценки</Title2>
      <Description>
        Результатом оценки производственной недвижимости служит официальный
        отчёт, который содержит следующие сведения:
      </Description>
      <LiColored>Информация о заявителе и оценочной компании.</LiColored>
      <LiColored>Номера кадастровых паспортов.</LiColored>
      <LiColored>Краткая характеристика обследуемого сооружения.</LiColored>
      <LiColored>Описание целей проведения оценки.</LiColored>
      <LiColored>
        Расчёт рыночной, ликвидационной или залоговой стоимости комплекса
        сооружений, земельных участков.
      </LiColored>
      <LiColored>Расчет рекомендуемой арендной ставки.</LiColored>
      <LiColored>
        Примечания и рекомендации для заинтересованного лица.
      </LiColored>
      <Description>
        Наш отчёт, выданный заявителю, удостоверяется личной подписью
        уполномоченного оценщика, а также синей печатью нашего предприятия, что
        гарантирует достоверность проведённых расчетов.
      </Description>
      <Title>Наши преимущества</Title>
      <Description>
        Наша организация зарекомендовала себя как надёжный партнёр, и
        большинство клиентов оставляют о нас только положительные отзывы, оценив
        преимущества работы с нами:
      </Description>
      <LiColored>Наличие необходимых сертификатов.</LiColored>
      <LiColored>В штате трудоустроены аттестованные специалисты.</LiColored>
      <LiColored>Выполнение работ производится строго в срок.</LiColored>
      <LiColored>Продолжительный опыт на рынке.</LiColored>
      <LiColored>
        Оценка проводится после заключения официального договора.
      </LiColored>
      <LiColored>
        Проводим оценку зданий и сооружений любой категории.
      </LiColored>
      <LiColored>Индивидуальный подход к каждому клиенту.</LiColored>
      <LiColored>
        Отчёты принимаются к рассмотрению коммерческими организациями и органами
        власти.
      </LiColored>
      <Description>
        <i>
          Чтобы заказать услугу по оценке стоимости производственных помещений в
          нашей компании вам достаточно позвонить по многоканальному номеру
          телефона, указанному на сайте, либо заполнить форму обратной связи. Мы
          перезвоним вам в течение дня для согласования технического задания,
          изучения документации, выставления коммерческого предложения и ответа
          на интересующие вопросы.
        </i>
      </Description>
    </div>
  );
};

export default IndustrialPremises;
