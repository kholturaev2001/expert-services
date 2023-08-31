import ServiceCard from "../../../components/Card/ServiceCard";
import HeadBreadcrumb from "../../../components/HeadBreadcrumb";
import s_img from "../../../assets/images/services/valuation/property_complexes.jpg";
import Description from "../../../components/Typography/Description";
import LiColored from "../../../components/Typography/LiColored";
import Title from "../../../components/Typography/Title";
import DTable from "../../../components/DTable";

const PropertyComplexes = () => {
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
            title: "Имущественный комплекс",
          },
        ]}
      />
      <ServiceCard
        img={s_img}
        title="Оценка имущественных комплексов"
        price={10000}
        deadline="7 дней"
      />
      <Description>
        Имущественные комплексы представляют собой совокупность активов
        официально зарегистрированного юридического лица, которые обеспечивают
        ему ведение предпринимательской деятельности. К ним относится движимое и
        недвижимое имущество предприятия и интеллектуальная собственность,
        которой оно располагает. Оценка такого объекта с определением его
        конечной цены на текущий период предполагает анализ всех его
        составляющих:
      </Description>
      <LiColored>ТС и оборудования;</LiColored>
      <LiColored>земельных участков;</LiColored>
      <LiColored>готовых товаров и находящейся в запасе продукции;</LiColored>
      <LiColored>
        {" "}
        коммуникационных сетей и других активов, которые отражены в
        бухгалтерском балансе организации.
      </LiColored>
      <Description>
        Специалисты компании “АИС ПЕРЕВОДЧИК” проводят независимую оценку имущественных
        комплексов в соответствии с требованиями российского законодательства.
        Мы работаем с объектами любой сложности. По результатам оценки
        составляется официальный отчет, который имеет юридическую силу. В
        соответствии с ФЗ №135 “Об оценочной деятельности в РФ”, период действия
        экспертного заключения — 6 месяцев.
      </Description>
      <Title>Когда проводится оценка имущественного комплекса?</Title>
      <Description>
        Оценочные мероприятия выполняются в следующих случаях:
      </Description>
      <LiColored>
        если юридическое лицо находится в составе группы компаний или другого
        крупного предприятия;
      </LiColored>
      <LiColored>
        если две организации решили объединить собственные активы с оформлением
        новой учредительной документации и постановкой на баланс всех ценностей;
      </LiColored>
      <LiColored>
        при проведении реструктуризации юрлица с реализацией оформления залога
        или отчуждением части активов;
      </LiColored>
      <LiColored>
        если оформляется временное отчуждение части имущества в пользу
        финансовой организации с целью получения займа;
      </LiColored>
      <LiColored>
        при подготовке документации в соответствии с международными стандартами
        финансовой отчетности (МСФО);
      </LiColored>
      <LiColored>
        если проводится реструктуризация долговых обязательств предприятия для
        оформления нового кредита с целью погашения старого;
      </LiColored>
      <LiColored>
        при возникновении односторонних или взаимных судебных претензий между
        двумя юрлицами;
      </LiColored>
      <LiColored>
        при необходимости решения спорных вопросов до вынесения судебного
        решения;
      </LiColored>
      <LiColored>если меняется менеджмент компании;</LiColored>
      <LiColored>
        если проводится реорганизация деятельности юрлица для улучшения
        финансовых показателей;
      </LiColored>
      <LiColored>
        при проведении сделок купли-продажи всего объекта или его части;
      </LiColored>
      <LiColored>при поиске инвестора;</LiColored>
      <LiColored>при проведении торгов и т.д.</LiColored>
      <Title>Методы оценки имущественного комплекса предприятия</Title>
      <Description>
        На практике применяется несколько методов оценки стоимости
        имущественного комплекса предприятий:
      </Description>
      <DTable
        dataSource={[
          {
            key: "1",
            row_one: <b>Затратный</b>,
            row_two:
              "Включает сумму всех понесенных владельцами бизнеса затрат на организацию предпринимательской деятельности. В рассматриваемые траты входит стоимость земли, зданий и сооружений, станков и оборудования, спецтехники, учредительных документов, сертификации, транспортных единиц для обеспечения логистики и других активов оцениваемой компании, которые официально поставлены на баланс.",
          },
          {
            key: "2",
            row_one: <b>Доходный</b>,
            row_two:
              "Предполагает проведение анализа разницы между выручкой и операционными расходами компании за рассматриваемый отчетный период (как правило, не менее, чем за прошедший год). В сумму выручки входят все полученные предприятием денежные средства от ведения основной или вспомогательной деятельности. Расходы включают зарплату, арендные платежи, налоги, лизинговые и другие отчисления.",
          },
          {
            key: "3",
            row_one: <b>Балансовой стоимости</b>,
            row_two:
              "Объективный подход к определению конечной цены активов юридического лица, когда во внимание принимается расходная статья при покупке имущества с учетом его физического износа и амортизации на протяжении фактического срока использования.",
          },
          {
            key: "4",
            row_one: <b>Сравнительный анализ</b>,
            row_two:
              "Один из наиболее популярных методов оценки имущественного комплекса. Эксперт анализирует рынок и бизнес-среду в регионе расположения рассматриваемой компании, а также проверяет аналогичные предложения от собственников других имущественных комплексов на определенной территории. Объективная стоимость формируется на основании проведенного сравнения конкурентоспособных предприятий.",
          },
        ]}
        columns={[
          {
            dataIndex: "row_one",
            key: "row_one",
            width: "20%",
          },
          {
            dataIndex: "row_two",
            key: "row_two",
          },
        ]}
        bordered
        showHeader={false}
      />
      <Description>
        Все используемые методы тесно связаны между собой. Для того чтобы
        качественно и профессионально оценить имущественный комплекс,
        специалистам следует применять все подходы. Каждый из них учитывает
        различные факторы, оказывающие влияние на итоговую стоимость объекта. Их
        анализ по отдельности и в совокупности поможет наиболее объективно и
        точно определить цену имущественного комплекса.
      </Description>
      <Title>Стоимость услуг</Title>

      <Description>
        Стоимость проведения экспертизы по оценке стоимости имущественного
        комплекса в нашей компании зависит от ряда показателей:
      </Description>
      <LiColored>формы собственности организации;</LiColored>
      <LiColored>количества учредителей;</LiColored>
      <LiColored>общей стоимости понесенных владельцами затрат;</LiColored>
      <LiColored>
        количества основных активов, находящихся на балансе предприятия;
      </LiColored>
      <LiColored>состояния бухгалтерской отчетности;</LiColored>
      <LiColored>наличия кредитных или лизинговых обязательств;</LiColored>
      <LiColored>показателей прибыли или убытков;</LiColored>
      <LiColored>сферы деятельности предприятия;</LiColored>
      <LiColored>
        географии продаж производимой продукции или объектов интеллектуального
        труда;
      </LiColored>
      <LiColored>
        географии продаж производимой продукции или объектов интеллектуального
        труда;
      </LiColored>
      <LiColored>места предоставление отчета;</LiColored>
      <LiColored>наличия бизнес-плана;</LiColored>
      <LiColored>участия компании в судебных процессах;</LiColored>
      <LiColored>
        наличия незавершенных контрактов, подрядов и других обязательств, в
        соответствии с официально заключенными договорами.
      </LiColored>

      <Description>
        Как правило, стоимость комплекса работ по оценке предприятий и их
        основных активов начинается от 50 – 100 тыс. рублей. Точная сумма
        определяется на основании подробного сметного расчета, в основу которого
        закладываются базовые расценки, а также корректирующие коэффициенты.
      </Description>
      <Title>Перечень необходимых документов</Title>
      <Description>
        Для проведения экспертных действий в отношении предприятия и его активов
        заинтересованные лица предоставляют следующий комплект документов:
      </Description>
      <LiColored>учредительные документы организации;</LiColored>
      <LiColored>
        бухгалтерская отчетность за необходимый период, включая все поступления,
        расходы, уплату налогов, а также НДФЛ;
      </LiColored>
      <LiColored>
        контракты на поставку оборудования, которое числится на балансе
        комплекса;
      </LiColored>
      <LiColored>
        копии кредитных договоров, а также платежных документов,
        свидетельствующих о частичном погашении долговых обязательств;
      </LiColored>
      <LiColored>
        при наличии – отдельные экспертные заключения по текущему состоянию
        оборудования, с учетом его физического износа;
      </LiColored>
      <LiColored>
        копии незавершенных контрактов с потенциальными или фактическими
        клиентами, контрагентами предприятия;
      </LiColored>
      <LiColored>
        судебные решения и другие документы, свидетельствующие о долговых
        обязательствах, наложенных судом.
      </LiColored>
      <Description>
        <i>
          При необходимости эксперт может также запросить дополнительную
          документацию, анализ которой поможет дать более объективную оценку
          имущественному комплексу.
        </i>
      </Description>
      <Description>
        <i>
          Наша компания работает на рынке экспертных услуг с 2005 года.
          Благодаря солидному практическому опыту мы предлагаем профессиональный
          подход, быстрое решение практически любого вопроса клиента и
          корректное оформление отчета. Наши клиенты оставляют о нас
          положительные отзывы, а стоимость наших услуг ниже, чем у большинства
          конкурентов.
        </i>
      </Description>
      <Description>
        <i>
          Заказать услугу независимой оценки имущественного комплекса можно,
          позвонив по указанному на сайте телефону. Также можно отправить запрос
          по адресу электронной почты <a className="underline font-semibold" href="mailto:example@ru">example@ru</a>. Наш специалист свяжется с
          вами для обсуждения деталей сотрудничества.
        </i>
      </Description>
    </div>
  );
};

export default PropertyComplexes;
