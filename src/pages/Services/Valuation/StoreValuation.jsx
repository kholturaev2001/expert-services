import ServiceCard from "../../../components/Card/ServiceCard";
import s_img from "../../../assets/images/services/valuation/store.jpeg";
import Title from "../../../components/Typography/Title";
import Description from "../../../components/Typography/Description";
import Ul from "../../../components/Typography/Ul";
import Paragraph from "../../../components/Typography/Paragraph";
import HeadBreadcrumb from "../../../components/HeadBreadcrumb";

const StoreValuation = () => {
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
            title: "Склад",
          },
        ]}
      />
      <ServiceCard img={s_img} title="Независимая оценка склада" />
      <Description>
        Проведём оценку склада вне зависимости от его площади, объёма полезного
        пространства, места расположения и назначения в сжатые сроки по
        оптимальной цене. По результатам оценочных мероприятий оформляем
        подробный отчёт, в котором указываем рыночную, залоговую или
        ликвидационную стоимость объекта. Проводим оценку складских помещений
        как расходным и доходным методами, так и на основании анализа рынка
        аналогичных логистических комплексов в регионе. Объективная оценка
        поможет правообладателю правильно рассчитать размер арендной платы,
        оформить кредитный договор или выгодно реализовать недвижимость по
        договору купли-продажи.
      </Description>
      <Title>В каких ситуациях без оценочной экспертизы не обойтись</Title>
      <Description>
        Без оценки или оценочной экспертизы складских комплексов не обойтись в
        любой из следующих ситуаций:
      </Description>
      <Ul>
        <li>
          Расчёт рыночной стоимости объекта при необходимости его отчуждения в
          пользу третьего лица, согласно договору купли-продажи.
        </li>
        <li>
          Определение объективной арендной ставки для получения прибыли от сдачи
          склада или части помещений для хранения.
        </li>
        <li>
          Корректировка суммы налога, которая формируется на основании
          кадастровой стоимости объекта.
        </li>
        <li>Определение страховой выплаты при оформлении полиса.</li>
        <li>Внесение нового актива в уставной капитал юридического лица.</li>
        <li>
          Раздел имущества между правообладателями с вычленением доли в пользу
          каждого из них.
        </li>
        <li>
          Решение спорных имущественных или финансовых вопросов с привлечением
          органа судебной власти.
        </li>
        <li>
          Выставление претензий ответчику при случайном или умышленном
          причинении ущерба.
        </li>
        <li>Оформление наследственного дела в пользу заинтересованных лиц.</li>
        <li>
          Временное отчуждение имущества при подписании кредитного договора или
          при рефинансировании долговых обязательств.
        </li>
      </Ul>
      <Description>
        Оценка стоимости склада позволяет избежать многих спорных ситуаций между
        заинтересованными лицами как в досудебном порядке, так и после
        инициирования искового заявления одной из сторон.
      </Description>
      <Title>Виды складской недвижимости</Title>
      <Description>
        Складская недвижимость подразделяется на несколько категорий согласно
        назначению, габаритам и особенностям конструкции:
      </Description>
      <Ul>
        <Paragraph>
          <b>1. По габаритам:</b>
        </Paragraph>
        <li>
          Малые объекты с этажностью до 2 уровней и совокупной площадью
          помещений до 1500 м2. Не требуют привлечения экспертного органа при
          согласовании проекта, вводятся в эксплуатацию через местную
          администрацию.
        </li>
        <li>
          Полноразмерные объекты капитального строительства с площадью более
          1500 м2. Проект требует прохождения государственной экспертизы, а
          также постоянного надзора за строительством со стороны инспекции ГАСН.
          Такие здания требуют особого внимания и периодического обслуживания,
          проверки состояния инженерных коммуникаций. Оцениваются как
          полноценные активы.
        </li>
        <Paragraph>
          <b>2. По конструкции:</b>
        </Paragraph>
        <li>
          Открытые – представляют собой участок земли с навесом, могут
          снабжаться грузоподъёмным оборудованием.
        </li>
        <li>
          Закрытые – полноценные здания с ограждающими и несущими конструкциями,
          кровлей, дверными, оконными проёмами, воротами, зонами погрузки и
          разгрузки.
        </li>
        <Paragraph>
          <b>3. По температурному режиму:</b>
        </Paragraph>
        <li>Отапливаемые.</li>
        <li>Холодные (неотапливаемые).</li>
        <li>Рефрижераторные установки.</li>
        <Paragraph>
          <b>4. По назначению:</b>
        </Paragraph>
        <li>
          Транзитные – устраиваются при железнодорожных станциях, в портах и
          других транспортных узлах.
        </li>
        <li>
          Цеховые или заводские – возводятся при производственных предприятиях.
        </li>
        <li>
          Продуктовые – предназначены для хранения продовольственных товаров в
          стерильных условиях.
        </li>
        <li>
          Материальные – классические складские объекты, в которых хранятся все
          типы непродовольственных товаров.
        </li>
        <li>
          Специального назначения – для хранения особо опасных химикатов, легко
          воспламеняющихся веществ и других особых товаров.
        </li>
      </Ul>
      <Description>
        Наша компания проводит оценку всех типов складских комплексов с учётом
        их конструкции, инженерного оснащения, вместимости, а также средней
        стоимости аренды ячейки для хранения продукции.
      </Description>
      <Title>Документы, необходимые для проведения оценочной процедуры</Title>
      <Description>
        После заключения договора с заявителем сотрудник нашей компании
        выполняет оценочные мероприятия согласно предварительно составленному
        плану. На первом этапе анализируется следующий перечень исходных
        документов, переданных от заинтересованного лица:
      </Description>
      <Ul>
        <li>
          Свидетельство о собственности, зарегистрированное на имя
          заинтересованного лица.
        </li>
        <li>
          Учредительные документы компании, на балансе которой находится
          складской комплекс.
        </li>
        <li>
          Кадастровый паспорт объекта недвижимости, а также земельного участка,
          на котором он расположен.
        </li>
        <li>
          Документация, на основании которой производилась регистрация объекта в
          пользу правообладателя.
        </li>
        <li>
          Сведения о существующих обременениях, накладываемых от дорог, объектов
          транспортной инфраструктуры.
        </li>
        <li>Договоры на технологическое присоединение к инженерным сетям.</li>
        <li>
          Проектная документация, заключение экспертизы, листы согласований
          перепланировки и других изменений в конструкциях здания.
        </li>
        <li>
          Бухгалтерские отчёты, свидетельствующие о получении дохода от сдачи
          площадей в аренду.
        </li>
      </Ul>
      <Description>
        Указанный выше список является ориентировочным, и оценщик может
        запросить у клиента дополнительные документы, если их наличие поможет
        дать объективную оценку складской недвижимости, а также оформить
        детальный отчёт.
      </Description>
      <Title>От чего зависит стоимость здания по результатам оценки</Title>
      <Description>
        По результатам оценки склада уполномоченное от нашей компании лицо
        оформляет официальный отчёт. Данный документ содержит сведения о
        складском комплексе, подлежащем оценке, планировочных ограничениях и
        обременениях, а также расчёт конечной рыночной, залоговой или
        ликвидационной стоимости объекта, которая зависит от следующих факторов:
      </Description>
      <Ul>
        <li>Место расположения склада.</li>
        <li>
          Наличие подъездных путей, железнодорожного тупика, транспортных узлов.
        </li>
        <li>Полезная площадь сооружения.</li>
        <li>Количество помещений в здании.</li>
        <li>Температурный режим в складских помещениях.</li>
        <li>Количество погрузочно-разгрузочных шлюзов.</li>
        <li>Общее число мест для хранения продукции.</li>
        <li>Наличие инженерных коммуникаций.</li>
        <li>Год постройки объекта.</li>
        <li>
          Форма собственности, зарегистрированная за заинтересованным лицом.
        </li>
        <li>
          Степень физического износа конструкций, элементов отделки, инженерных
          сетей.
        </li>
        <li>
          Общая сумма средств, вложенных в постройку, технологическое и
          инженерное оснащение объекта.
        </li>
        <li>Среднегодовой доход от сдачи площадей в аренду.</li>
      </Ul>
      <Paragraph>
        <i>
          Наша компания располагает необходимыми учредительными документами,
          сертификатами и лицензиями, а также штатом аттестованных специалистов,
          что даёт нам право на составление любого официального отчёта, который
          принимается к рассмотрению как банковским учреждением, так и органом
          судебной власти.
        </i>
      </Paragraph>
      <Paragraph>
        <i>
          Для заказа оценки склада в нашей компании позвоните нам по
          многоканальному контактному телефону, указанному на сайте, либо
          оставьте запрос в окне обратной связи. Мы перезвоним вам для
          проведения консультации, расчёта стоимости предоставления услуги, а
          также для согласования времени выезда на объект.
        </i>
      </Paragraph>
      <Paragraph>
        <i>
          Наши специалисты выполняют все работы в согласованный срок,
          качественно, а также гарантируют расчёт реальной цены, что поможет
          заинтересованному лицу получить максимальную выгоду при проведении
          различных сделок или действий в отношении принадлежащего ему
          складского комплекса. Стоимость оценки склада при обращении в нашу
          компанию оптимальна в сравнении с большинством конкурентов.
        </i>
      </Paragraph>
    </div>
  );
};

export default StoreValuation;
