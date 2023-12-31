import ServiceCard from "../../../components/Card/ServiceCard";
import HeadBreadcrumb from "../../../components/HeadBreadcrumb";
import s_img from "../../../assets/images/services/taxcuts/challenging_the_cadastral_value_of_real_estate.jpg";
import Description from "../../../components/Typography/Description";
import Title from "../../../components/Typography/Title";
import LiCOlored from "../../../components/Typography/LiColored";
import CadastralValueCard from "./CadastralValueCard";
import DTable from "../../../components/DTable";
import Ol from "./../../../components/Typography/Ol";
import Title2 from "./../../../components/Typography/Title2";
import LiColored from "../../../components/Typography/LiColored";
import Email from "./../../../components/Typography/Email";

const ChallengingCadastralValueOfRealEstate = () => {
  const columns = [
    {
      title: "год",
      dataIndex: "year",
      key: "year",
      width: "20%",
    },
    {
      title: "Москва",
      children: [
        {
          title: "Налог от КС	",
          dataIndex: "kc_tax",
          key: "kc_tax",
        },
        {
          title: "Налог от СГС",
          dataIndex: "cgc_tax",
          key: "cgc_tax",
          onCell: (record) => ({
            rowSpan: record.key % 5 === 0 ? 5 : 0,
          }),
        },
      ],
    },
    {
      title: "Московская область",
      children: [
        {
          title: "Налог от КС	",
          dataIndex: "kc_tax",
          key: "kc_tax",
        },
        {
          title: "Налог от СГС",
          dataIndex: "cgc_tax",
          key: "cgc_tax",
          onCell: (record) => ({
            rowSpan: record.key % 5 === 0 ? 5 : 0,
          }),
        },
      ],
    },
  ];

  const data = [
    {
      key: 0,
      year: "2019",
      kc_tax: "1,6",
      cgc_tax: "2,2*",
      kc_tax2: "1,5",
      cgc_tax2: "2,2*",
    },
    {
      key: 1,
      year: "2020",
      kc_tax: "1,7",
      cgc_tax: "2,2*",
      kc_tax2: "1,7",
      cgc_tax2: "2,2*",
    },
    {
      key: 2,
      year: "2021",
      kc_tax: "1,8",
      cgc_tax: "2,2*",
      kc_tax2: "1,8",
      cgc_tax2: "2,2*",
    },
    {
      key: 3,
      year: "2022",
      kc_tax: "1,9",
      cgc_tax: "2,2*",
      kc_tax2: "1,9",
      cgc_tax2: "2,2*",
    },
    {
      key: 4,
      year: "2023 и далее",
      kc_tax: "2,0",
      cgc_tax: "2,2*",
      kc_tax2: "2,0",
      cgc_tax2: "2,2*",
    },
  ];

  return (
    <div>
      <HeadBreadcrumb
        items={[
          {
            title: "Главная",
          },
          {
            title: "Снижение налогов",
          },
          {
            title: "Оспаривание кадастровой стоимости недвижимости",
          },
        ]}
      />
      <ServiceCard
        img={s_img}
        deadline="от 30 дней"
        price={70000}
        title="Оспаривание кадастровой стоимости"
      />

      <Description>
        Кадастровая стоимость — это стоимость объекта недвижимости или
        земельного участка, которая устанавливается государством. Данные
        сведения вносятся в ЕГРН.. На их основании рассчитывается размер
        ежегодного имущественного налога, начисляемого органами ФНС по
        завершении отчетного периода, а также арендная плата, платежи за смену
        вида разрешенного использования земельного участка и иные выплаты.
      </Description>
      <Description>
        При расчете кадастровой стоимости в большинстве случаев используется
        метод массовой оценки. Он предполагает учет комплексных сведений об
        объекте недвижимости в конкретном районе. Специалисты рассчитывают
        среднюю стоимость за квадратный метр, учитывая площадь дома, расстояние
        до центра города, инфраструктуру, транспортную доступность. При этом в
        расчет не принимаются такие значимые факторы, как проведение
        перепланировок и капитального ремонта, степень износа, наличие в
        непосредственной близости промзоны и т. п. Таким образом, кадастровая
        стоимость может быть в несколько раз выше рыночной цены объекта. В
        результате владельцам бизнеса приходится оплачивать неоправданно большой
        налог и арендную плату.
      </Description>
      <Description>
        Эксперты оценочной компании АИС «ПЕРЕВОДЧИК» помогут вам эффективно
        решить задачи с оспариванием кадастровой стоимости в административном
        или судебном порядке. Мы действуем в интересах клиентов и обеспечиваем
        полное сопровождение процедуры, вплоть до внесения измененных данных в
        государственный кадастр недвижимости.
      </Description>
      <Title>
        Какие возможности открывает услуга снижения кадастровой стоимости
        объекта недвижимости?
      </Title>
      <Description>Услуга позволяет:</Description>
      <LiColored>уменьшить размер налоговых выплат;</LiColored>
      <LiColored>частично вернуть уже уплаченные налоговые взносы;</LiColored>
      <LiColored>
        увеличить общую прибыль благодаря снижению налогооблагаемой базы;
      </LiColored>
      <LiColored>
        улучшить условия для продажи объекта недвижимости за счет уменьшения
        налоговой нагрузки.
      </LiColored>
      <Description>
        Инициировать процедуру оспаривания кадастровой стоимости могут владельцы
        зданий, помещений, земельных участков, или арендаторы недвижимости,
        находящейся в муниципальной собственности в Москве и других городах.
      </Description>
      <Title>Основания для снижения кадастровой стоимости</Title>
      <Description>
        Кадастровая стоимость объекта недвижимости может быть пересмотрена в
        досудебном или судебном порядке на основании:
      </Description>
      <LiColored>
        выявленных технических и методологических ошибок, которые были допущены
        при расчете цены;
      </LiColored>
      <LiColored>
        значительной разницы между рыночной и кадастровой стоимостью нежилого
        здания, помещения или земельного участка.
      </LiColored>
      <Description>
        При идентификации ошибок или неточностей, которые являются следствием
        человеческого или технического фактора, проблема решается в досудебном
        порядке. В остальных случаях чаще всего требуется обращение в суд путем
        составления и подачи искового заявления. В настоящее время
        законодательство позволяет “пропустить” досудебный этап урегулирования
        спора. Таким образом, собственник недвижимости может сразу обратиться в
        суд.
      </Description>
      <Title>Сроки оспаривания кадастровой стоимости</Title>
      <Description>
        Срок процедуры пересмотра кадастровой стоимости составляет от трех
        месяцев до полугода. С 1 января 2022 года единый цикл переоценки в
        населенных пунктах федерального значения составляет 2 года, в регионах —
        4 года.
      </Description>
      <Description>
        Важно! С 1 января 2023 года процедура усложняется — досудебный процесс
        пересмотра становится обязательным. Заявление о переоценке будет
        запрещено сразу отправлять в суд. Только после получения отказа в
        проведении экспертизы с целью оспаривании кадастровой стоимости от
        бюджетной организации собственник получит возможность доказать свою
        правоту в судебном порядке.
      </Description>
      <Description>
        Некоторые регионы имеют право ввести досудебный порядок раньше
        положенного срока. При этом с обязательным участием государственной
        бюджетной организации период оспаривания может быть увеличен до полутора
        лет.
      </Description>
      <Description>
        Кроме того, Правительство Российской Федерации утвердило распоряжение №
        3214-р от 16.11.2021. В нем представлен перечень судебных экспертиз,
        которые в обязательном порядке должны проводиться государственными
        организациями. Одна из них — судебная экспертиза по расчету рыночной
        цены недвижимости в рамках оспаривания кадастровой стоимости. Таким
        образом, данная процедура переходит полностью под государственный
        контроль, и только квалифицированный эксперт поможет пройти ее по всем
        правилам.
      </Description>
      <Title>Факты о компании АИС «ПЕРЕВОДЧИК»</Title>
      <LiColored>
        более 6 миллиардов рублей - сумма сэкономленных клиентам налоговых
        платежей
      </LiColored>
      <LiColored>
        более 300 положительных решений по оспариванию кадастровой стоимости
      </LiColored>
      <LiColored>более 5 лет опыта в сфере независимой оценки</LiColored>
      <LiColored>
        есть все необходимые по закону сертификаты и свидетельства
      </LiColored>
      <LiColored>сильная команда профессионалов</LiColored>
      <div className="md:max-w-[1280px] mx-auto justify-center flex flex-col items-center my-4 px-4">
        <div className="flex md:gap-3 flex-col md:flex-row">
          <CadastralValueCard
            object="ЗЕМЕЛЬНЫЙ УЧАСТОК ДЛЯ ПРОМЫШЛЕННОГО СТРОИТЕЛЬСТВА"
            service="ОСПАРИВАНИЕ КАДАСТРОВОЙ СТОИМОСТИ"
            region="МОСКОВСКАЯ ОБЛАСТЬ"
            cadastralPrice="96 184 579"
            price="50 251 068"
            taxPeriod="19 МЕСЯЦЕВ"
            taxEconomy="1 090 921"
            percent={48}
          />
          <CadastralValueCard
            object="ЗЕМЕЛЬНЫЙ УЧАСТОК ПОД ЗДАНИЕ НЕЖИЛОГО СТРОИТЕЛЬСТВА"
            service="ОСПАРИВАНИЕ КАДАСТРОВОЙ СТОИМОСТИ"
            region="МОСКОВСКАЯ ОБЛАСТЬ"
            cadastralPrice="12 484 248"
            price="5 010 558"
            taxPeriod="19 МЕСЯЦЕВ"
            taxEconomy="177 500"
            percent={60}
          />
        </div>
        <div className="flex md:gap-3 flex-col md:flex-row">
          <CadastralValueCard
            object="ЗЕМЕЛЬНЫЙ УЧАСТОК ПОД ЗДАНИЯМИ СКЛАДСКОГО И ПРОИЗВОДСТВЕННОГО НАЗНАЧЕНИЯ"
            service="ОСПАРИВАНИЕ КАДАСТРОВОЙ СТОИМОСТИ"
            region="МОСКОВСКАЯ ОБЛАСТЬ"
            cadastralPrice="161 136 222"
            price="114 096 000"
            taxPeriod="48 МЕСЯЦЕВ"
            taxEconomy="2 822 413"
            percent={29}
          />
          <CadastralValueCard
            object="ЗЕМЕЛЬНЫЙ УЧАСТОК ПОД ЗДАНИЕ НЕЖИЛОГО СТРОИТЕЛЬСТВА"
            service="ОСПАРИВАНИЕ КАДАСТРОВОЙ СТОИМОСТИ"
            region="МОСКОВСКАЯ ОБЛАСТЬ"
            cadastralPrice="8 867 417"
            price="6 735 915"
            taxPeriod="38 МЕСЯЦЕВ"
            taxEconomy="101 246"
            percent={24}
          />
        </div>
        <div className="flex md:gap-3 flex-col md:flex-row">
          <CadastralValueCard
            object="ЗЕМЕЛЬНЫЙ УЧАСТОК ПОД СКЛАДЫ, ОБЪЕКТЫ ДОРОЖНОГО СЕРВИСА"
            service="ОСПАРИВАНИЕ КАДАСТРОВОЙ СТОИМОСТИ"
            region="МОСКОВСКАЯ ОБЛАСТЬ"
            cadastralPrice="85 333 760"
            price="61 525 011"
            taxPeriod="11 МЕСЯЦЕВ"
            taxEconomy="327 370"
            percent={28}
          />
          <CadastralValueCard
            object="ЗЕМЕЛЬНЫЙ УЧАСТОК ДЛЯ ОСУЩЕСТВЛЕНИЯ ПРОИЗВОДСТВЕННОЙ ДЕЯТЕЛЬНОСТИ"
            service="ОСПАРИВАНИЕ КАДАСТРОВОЙ СТОИМОСТИ"
            region="МОСКОВСКАЯ ОБЛАСТЬ"
            cadastralPrice="227 699 413"
            price="182 242 858"
            taxPeriod="22 МЕСЯЦЕВ"
            taxEconomy="1 250 055 "
            percent={24}
          />
        </div>
      </div>

      <Title>Какие документы потребуются?</Title>
      <div className="overflow-auto md:scale-100 scale-[90%]">
        <DTable
          dataSource={[
            {
              key: "1",
              row_one: (
                <b>Для проведения оценки рыночной стоимости недвижимости</b>
              ),
              row_two: (
                <div className="px-3">
                  <p className="my-2">Потребуется предоставить:</p>
                  <ol className="list-decimal">
                    <li>
                      Свидетельство о собственности на здание/Выписки из Единого
                      госреестра недвижимости об основных характеристиках и
                      зарегистрированных правах на здание (копия, заверенная
                      печатью организации).
                    </li>
                    <li>
                      Технический паспорт на здание (копия, заверенная печатью
                      организации).
                    </li>
                    <li>
                      Экспликацию технического плана БТИ (копия, заверенная
                      печатью организации).
                    </li>
                    <li>
                      Кадастровый паспорт на здание (копия, заверенная печатью
                      организации).
                    </li>
                    <li>
                      Выписку из Единого госреестра недвижимости о кадастровой
                      стоимости объектов недвижимости, содержащих сведения об
                      оспариваемых результатах определения кадастровой стоимости
                      здания (копия, заверенная печатью организации).
                    </li>
                    <li>
                      Выписку из Единого госреестра недвижимости о кадастровой
                      стоимости объектов недвижимости, содержащих сведения об
                      оспариваемых результатах определения кадастровой стоимости
                      земельного участка (копия, заверенная печатью
                      организации).
                    </li>
                    <li>
                      Правоустанавливающие документы на земельный участок
                      (договор аренды/свидетельство о собственности/выписка из
                      ЕГРН) (копия, заверенная печатью организации).
                    </li>
                    <li>
                      Справку о балансовой стоимости здания на дату оценки
                      (оригинал).
                    </li>
                    <li>
                      Справку о балансовой стоимости земельного участка на дату
                      оценки (оригинал).
                    </li>
                  </ol>
                </div>
              ),
            },
            {
              key: "2",
              row_one: <b>Для обращения в судебную инстанцию </b>,
              row_two: (
                <div className="px-3">
                  <p className="my-2">Экспертам будут нужны:</p>
                  <ol className="list-decimal">
                    <li>
                      Выписка из Единого госреестра недвижимости о кадастровой
                      стоимости объекта недвижимости, содержащая сведения об
                      оспариваемых результатах определения кадастровой стоимости
                      (оригинал).
                    </li>
                    <li>
                      Выписка из Единого госреестра недвижимости об основных
                      характеристиках и зарегистрированных правах на объект
                      недвижимости (оригинал).
                    </li>
                    <li>
                      Отчет об оценке, составленный на бумажном носителе и в
                      форме электронного документа (оригинал).
                    </li>
                    <li>
                      Свидетельство о государственной регистрации юридического
                      лица (ОГРН) (копия, заверенная печатью организации).
                    </li>
                    <li>
                      Свидетельство о постановке на учет в налоговом органе
                      (ИНН) (копия, заверенная печатью организации).
                    </li>
                    <li>
                      Решение учредителя о создании юридического лица (копия,
                      заверенная печатью организации).
                    </li>
                    <li>
                      Решение о назначении генерального директора (копия,
                      заверенная ечатью организации).
                    </li>
                    <li>
                      Приказ о вступлении в должность генерального директора
                      (копия, заверенная печатью организации).
                    </li>
                    <li>
                      Устав Общества (копия, заверенная печатью организации).
                    </li>
                    <li>Доверенность на представителя (5 экземпляров).</li>
                  </ol>
                </div>
              ),
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
      </div>
      <Title>
        Как осуществляется оспаривание кадастровой стоимости юристами компании
        АИС «ПЕРЕВОДЧИК»?
      </Title>
      <Description>
        Специалисты компании АИС «ПЕРЕВОДЧИК» знают все тонкости проведения
        процедуры оспаривания. Они имеют соответствующую аккредитацию и солидный
        практический опыт и готовы взять на себя полное юридическое
        сопровождение процесса. Процедура оспаривания включает следующие этапы:
      </Description>
      <Ol>
        <li>
          Проведение экспресс-оценки. Наши специалисты определяют потенциал
          снижения кадастровой стоимости и экономическую целесообразность
          процедуры.
        </li>
        <li>
          Подготовка персонального предложения. Специалисты проверяют наличие
          методологических или технических ошибок при первоначальных расчетах.
          Кроме того, прорабатывается возможность исключения из “Перечня
          объектов недвижимого имущества, в отношении которых налоговая база
          определяется как кадастровая стоимость” (700-ПП) и применения
          налоговых льгот. На основании этих данных формируется дальнейшая
          стратегия работы и прогнозируется результат.
        </li>
        <li>
          Заключение соглашения. В нем подробно описываются все условия
          сотрудничества.
        </li>
        <li>
          Проведение независимой оценки рыночной цены объекта недвижимости и
          составление отчета с целью последующего оспаривания кадастровой
          стоимости. Эксперты анализируют предоставленные заказчиком документы,
          собирают дополнительные сведения и осуществляют необходимые расчеты.
          Все полученные данные оформляются в отчет.
        </li>
        <li>
          Участие в судебном процессе. Эксперты готовят документы и составляют
          исковое заявление. Мы представляем интересы заказчика в суде и
          получаем итоговое решение.
        </li>
        <li>
          Изменение кадастровой стоимости объекта недвижимости. Специалисты
          уведомляют органы местного самоуправления об изменении цены,
          направляют данные в Росреестр и получают новую выписку. В соответствии
          с обновленными сведениями происходит перерасчет налоговых выплат.
        </li>
      </Ol>
      <Title>Преимущества оценочной компании АИС «ПЕРЕВОДЧИК»</Title>
      <Description>Нам доверяют клиенты, потому что:</Description>
      <LiCOlored>
        мы оказываем услуги в полном соответствии с требованиями российского
        законодательства;
      </LiCOlored>
      <LiCOlored>
        сотрудничаем с судами, отделами внутренних дел, банками, арбитражными
        управляющими, коммерческими организациями и частными лицами;
      </LiCOlored>
      <LiCOlored>
        обладаем лицензией ФСБ на проведение работ, связанных с использованием
        сведений, составляющих государственную тайну;
      </LiCOlored>
      <LiCOlored>
        самостоятельно доставляем отчеты по адресу клиента и в суды в точно
        согласованное время;
      </LiCOlored>
      <LiCOlored>
        предлагаем полный спектр услуг, которые могут потребоваться собственнику
        любого имущества;
      </LiCOlored>
      <LiCOlored>
        при необходимости защищаем результаты работы в судах, комиссиях,
        инспекциях, перед проверяющими, экспертами СРО, акционерами;
      </LiCOlored>
      <LiCOlored>
        в нашем штате дипломированные эксперты, оценщики и специалисты высокой
        квалификации с подтверждением ученой степени, которые состоят в
        крупнейших профессиональных СРО и имеют персональные страховые полисы на
        сумму 15 000 000 рублей;
      </LiCOlored>
      <LiCOlored>
        персональный менеджер всегда на связи, оперативно отвечает на
        возникающие у вас вопросы;
      </LiCOlored>
      <Description>
        Для заказа услуги по оспариванию кадастровой стоимости объекта
        недвижимости в Москве и других городах свяжитесь с нашими юристами по
        указанному на сайте телефону. Также вы можете отправить запрос по адресу
        электронной почты <Email />. Наш специалист свяжется с вами для
        обсуждения деталей сотрудничества.
      </Description>
      <Title>Фактическая информация</Title>
      <Title2>Ставки налога на имущество организаций</Title2>

      <div className="overflow-auto md:scale-100 scale-[90%]">
        <DTable columns={columns} dataSource={data} bordered size="middle" />
      </div>
      <Description>
        * В отношении некоторого имущества могут использоваться иные ставки
        налога. Например, в отношении ж/д путей, линий электропередачи,
        трубопроводов и т.д.
      </Description>
      <Description>
        Налог оплачивается ежеквартально, равными платежами до 30 числа месяца
        следующего за отчетным кварталом. Итоговый платеж (за 4 квартал)
        производится в срок до 30.03 следующего календарного года.
      </Description>
      <br />
      <Title2>Ставки налога на имущество физических лиц</Title2>

      <div className="overflow-auto md:scale-100 scale-[90%]">
        <DTable
          dataSource={[
            {
              key: "1",
              row_one:
                "Объекты налогообложения, включенные в перечень, определяемый в соответствии с пунктом 7 статьи 378.2 Налогового кодекса Российской Федерации, в отношении объектов налогообложения, предусмотренных абзацем вторым пункта 10 статьи 378.2 Налогового кодекса Российской Федерации	",
              row_two: "1,5",
              row_three: "2,0",
            },
            {
              key: "2",
              row_one:
                "Объекты налогообложения, кадастровая стоимость каждого из которых превышает 300 млн.руб.	",
              row_two: "2,0",
              row_three: "2,0",
            },
            {
              key: "3",
              row_one: "Прочие объекты налогообложения	",
              row_two: "0,5",
              row_three: "0,5",
            },
          ]}
          columns={[
            {
              dataIndex: "row_one",
              key: "row_one",
              title: "Объекты налогообложения	",
            },
            {
              dataIndex: "row_two",
              key: "row_two",
              width: "20%",
              title: "Москва",
            },
            {
              dataIndex: "row_three",
              key: "row_three",
              width: "20%",
              title: "Московская область",
            },
          ]}
          bordered
        />
      </div>
      <Description>
        Физические лица обязаны оплатить налог на имущество за отчетный период
        (год) до 01.12 следующего календарного года. Оплата производится одним
        платежом в полном размере.
      </Description>
      <Title2>Ставки земельного налога в Москве</Title2>
      <div className="overflow-auto md:scale-100 scale-[90%]">
        <DTable
          dataSource={[
            {
              key: "1",
              row_one:
                "земельные участки, отнесенные к землям в составе зон сельскохозяйственного использования в городе Москве и используемые для сельскохозяйственного производства, а также земельные участки, предоставленные и используемые для эксплуатации объектов спорта, в том числе спортивных сооружений	",
              row_two: "0,3",
            },
            {
              key: "2",
              row_one: "прочие земельные участки",
              row_two: "1,5",
            },
            {
              key: "3",
              row_one:
                "земельные участки, ограниченные в обороте в соответствии с законодательством Российской Федерации, предоставленные для обеспечения обороны, безопасности и таможенных нужд	",
              row_two: "0,3",
            },
          ]}
          columns={[
            {
              dataIndex: "row_one",
              key: "row_one",
              title: "Наименование ЗУ",
            },
            {
              dataIndex: "row_two",
              key: "row_two",
              width: "20%",
              title: "Ставка налога, %",
            },
          ]}
          bordered
        />
      </div>
      <br />
      <Title2>Ставки земельного налога в Московской области</Title2>
      <div className="overflow-auto md:scale-100 scale-[90%]">
        <DTable
          dataSource={[
            {
              key: "1",
              row_one:
                "земли сельскохозяйственного назначения или земли в составе зон сельскохозяйственного использования в населенных пунктах и используемых для сельскохозяйственного производства	",
              row_two: "0,3",
            },
            {
              key: "2",
              row_one:
                "ограниченных в обороте в соответствии с законодательством Российской Федерации и предоставленных для обеспечения обороны, безопасности и таможенных нужд	",
              row_two: "0,3",
            },
            {
              key: "3",
              row_one: "для размещения объектов гаражного назначения	",
              row_two: "0,7",
            },
            {
              key: "4",
              row_one:
                "емли сельскохозяйственного назначения или земли в составе зон сельскохозяйственного использования в населенных пунктах и не используемых для сельскохозяйственного производства	",
              row_two: "1,5",
            },
            {
              key: "5",
              row_one: "прочие	",
              row_two: "1,5",
            },
          ]}
          columns={[
            {
              dataIndex: "row_one",
              key: "row_one",
              title: "Наименование ЗУ",
            },
            {
              dataIndex: "row_two",
              key: "row_two",
              width: "20%",
              title: "Ставка налога, %",
            },
          ]}
          bordered
        />
      </div>
      <Description>
        Сроки оплаты налога и размер платежей аналогичны налогу на имущество
        юридических и физических лиц.
      </Description>
    </div>
  );
};

export default ChallengingCadastralValueOfRealEstate;
