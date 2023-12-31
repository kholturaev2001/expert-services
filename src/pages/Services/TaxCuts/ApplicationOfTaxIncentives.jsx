import ServiceCard from "../../../components/Card/ServiceCard";
import HeadBreadcrumb from "../../../components/HeadBreadcrumb";
import s_img from "../../../assets/images/services/taxcuts/application_of_tax_incentives.jpg";
import Title from "../../../components/Typography/Title";
import Description from "../../../components/Typography/Description";
import Ul from "../../../components/Typography/Ul";

const ApplicationOfTaxIncentives = () => {
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
            title: "Применение налоговых льгот",
          },
        ]}
      />
      <ServiceCard img={s_img} title="Применение налоговых льгот" />

      <Title>Какие льготы по налогу на имущество предусмотрены законом</Title>
      <Description>
        Последние нововведения в системе налогообложения привели к значительному
        росту налогов на имущество. На то, какой налог организация платит в
        бюджет, влияет множество факторов и условий. Например, для каких целей
        фактически используется имущество? Включено ли оно в перечень объектов,
        облагаемых налогом от кадастровой стоимости? Не завышена ли эта
        стоимость? Могли ли быть допущены ошибки во время государственной
        кадастровой оценки?
      </Description>
      <Description>
        В настоящее время практически каждый собственник недвижимости знает о
        процессе оспаривания кадастровой стоимости. Не менее 50%
        правообладателей проводили оспаривание с целью уменьшить
        налогооблагаемую базу и снизить платежи, во многих случаях вполне
        удачно. И практика оценочной компании АИС «ПЕРЕВОДЧИК» включает массу таких
        примеров.
      </Description>
      <Description>
        К сожалению, на рынок вышло огромное количество компаний, которые не
        задумываются о качестве услуг. Например, обещают заведомо недостижимые
        результаты, когда собственник очень хочет оспорить кадастровую
        стоимость, но она уже установлена на уровне рыночной. И налогоплательщик
        может не только не получить планируемый результат, но даже не оправдать
        расходы на эту процедуру.
      </Description>
      <Description>
        Притом далеко не каждая организация рассматривает льготы по налогам для
        оптимизации налогообложения. Их полный перечень известен немногим, к
        тому же, он не является постоянным и может быть изменен. Рассмотрим
        основные налоговые льготы на имущество в Москве:
      </Description>
      <Ul>
        <li>Для гостиниц;</li>
        <li>
          Для объектов, фактически не используемых для коммерческих целей;
        </li>
        <li>Для субъектов малого предпринимательства;</li>
        <li>Для заводоуправлений;</li>
        <li>
          Для организаций, занимающихся медицинской, образовательной, научной
          деятельностью.
        </li>
      </Ul>
      <Title>Льготы по налогам для гостиниц</Title>
      <Description>
        Налоговая база может быть уменьшена на сумму, равную кадастровой
        стоимости увеличенной вдвое минимальной площади номерного фонда (ч. 2.2
        ст. 4.1 Закона г. Москвы от 05.11.2003 № 64).
      </Description>
      <Description>
        Допустим, в здании площадью 1000 кв.м. расположена гостиница площадью
        350 кв.м. И налоговая база для этого здания – кадастровая стоимость,
        равная 100 млн. руб. Для расчета льготы умножим площадь гостиницы на 2 и
        вычтем получившееся значение из общей площади здания. Получим 300 кв.м.,
        кадастровая стоимость которых равна 30 млн. руб. Таким образом,
        налоговая база уменьшилась со 100 до 30 млн. руб., а налог на имущество
        – более, чем в 3 раза.
      </Description>
      <Description>
        Пример из практики: владелец здания обратился в компанию с целью
        оспорить кадастровую стоимость. По состоянию на 01.01.2018 г. она была
        установлена в размере 127 млн. руб. Наиболее вероятный процент снижения
        составлял 20%, что принесло бы собственнику снижение налога на имущество
        организации за 2019-2021 г. в сумме на 1,3 млн. руб. Но выяснилось, что
        в здании располагается гостиница категории «4 звезды». В результате
        расчета льготы налог на имущество подлежал снижению более чем на 5 млн.
        руб.
      </Description>
      <Description>
        Могут подойти и небольшие объекты: хостелы, мотели, комплексы
        апартаментов и иные места временного проживания. Правильность применения
        льготы гостиницам необходимо подтвердить путем прохождения классификации
        и присвоения категории.
      </Description>
      <Title>
        Налоговые льготы в отношении объектов, фактически не используемых для
        коммерческих целей
      </Title>
      <Description>
        Суть льготы - уплата 25% суммы исчисленного налога в отношении объектов,
        которые фактически не используются для целей коммерции. В случае
        возможности ее применения собственник снижает платежи на 75% (ч. 2.3 ст.
        4.1 Закона г. Москвы от 05.11.2003 № 64).
      </Description>
      <Description>
        Добиться такого результата путем стандартного оспаривания кадастровой
        стоимости возможно в исключительных случаях. Претендовать на льготу
        могут юридические лица, которые платят налог на недвижимость. Для
        физических лиц она не предусмотрена. В ряде случаев целесообразно
        сменить собственника объекта и подать заявку с учетом такого изменения.
        Обязательно нужно учесть вид фактического использования объекта
        недвижимости и подтвердить его документально.
      </Description>
      <Title>Льготы для малого бизнеса</Title>
      <Description>
        Субъект малого предпринимательства имеет право на уменьшение налоговой
        базы на кадастровую стоимость 300 м² площади объекта недвижимости.
      </Description>
      <Description>
        Допустим, площадь здания равна 1000 кв.м., кадастровая стоимость - 100
        млн.руб. Вычтем 300 кв.м. из общей площади 1000 кв.м. и умножим
        результат на 100 тыс. руб. - стоимость одного метра. Получим новую
        величину налоговой базы - 70 млн.руб.
      </Description>
      <Description>
        Пример из практики: правообладатель здания площадью 420 кв.м. с
        кадастровой стоимостью 53,5 млн. руб. обратился к нам с целью снизить
        налоговую нагрузку. Правообладатель - субъект малого предпринимательства
        (общество с ограниченной ответственностю). Здание использовалось под
        размещение автомойки и детейлинг студии. В результате применения льготы
        сумма налога на имущество организаций за период 2019-2021 г. сократилась
        на 1,95 млн. руб.
      </Description>
      <Description>
        Налогоплательщик должен соблюсти требования (ч. 1 ст. 4.1 Закона г.
        Москвы от 05.11.2003 № 64) по количеству работников и по выручке на
        одного сотрудника, а также стоять на учете в налоговом органе не менее 3
        лет.
      </Description>
      <Title>Льготы зданиям заводоуправлений</Title>
      <Description>
        Как правило, на производственных предприятиях для целей его
        функционирования размещаются административные, финансово-учетные и
        вспомогательные службы. Формально их можно отнести к офисным:
        бухгалтерия, отдел кадров, производственно-технический отдел и другие.
      </Description>
      <Description>
        Этот пункт позволяет уменьшить налоговую базу на величину кадастровой
        стоимости площади объекта налогообложения, используемой
        налогоплательщиком для размещения рабочих мест работников,
        обеспечивающих его производственную деятельность, с применением
        коэффициента 0,75 (ч. 2.1 ст. 4.1 Закона г. Москвы от 05.11.2003 № 64).
        То есть, величина кадастровой стоимости умножается на ставку налога и на
        0,25.
      </Description>
      <Description>
        Пример из практики: завод по обработке металлов расположен на земельном
        участке в Москве. Ему принадлежат 16 зданий различного функционала. В
        ходе обследования зданий сотрудники Государственной инспекции по
        использованию объектов недвижимости выявили, что одно из них
        используется собственником под коммерческие цели - размещение офисов. И
        здание вошло в перечень объектов, налог по которым должен исчисляться от
        кадастровой стоимости, согласно Постановлению Правительства Москвы
        №700ПП на очередной налоговый период.
      </Description>
      <Description>
        Фактически же в нем располагались собственные службы завода - отделы
        логистики и материально-технического обеспечения, отдел кадров и
        инженерная служба. Предприятием была заявлена указанная льгота, и сумма
        налога на имущество снизилась на 3,8 млн. руб.
      </Description>
      <Title>
        Налоговые льготы для образовательных, медицинских и научных организаций
      </Title>
      <Description>
        Налогоплательщик уплачивает 25% суммы исчисленного налога для помещений,
        используемых для ¬образовательной, медицинской и научной деятельности
        (ч.2 ст. 4.1 Закона г. Москвы от 05.11.2003 № 64).
      </Description>
      <Description>
        Весьма существенный фактор - указанными видами деятельности должен
        заниматься именно налогоплательщик, а не арендатор объекта недвижимости.
        Помещение обязательно должно быть расположено в торговом центре или в
        бизнес-центре.
      </Description>
      <Title>Какие льготы по налогам вы можете получить и как</Title>
      <Description>
        Кроме указанных вариантов есть и иные льготы. Возможность их применения
        мы рассматриваем в каждом случае индивидуально. Оценочная компания
        АИС «ПЕРЕВОДЧИК» берется за комплексное решение вопроса снижения налогов на
        недвижимость.
      </Description>
      <Description>
        Мы выбираем оптимальный путь для достижения поставленной цели, не
        останавливаясь лишь на оспаривании кадастровой стоимости. Применение
        налоговых льгот или исключение из перечня объектов, облагаемых налогом
        на имущество от кадастровой стоимости, может стать гораздо более
        эффективным решением. Свяжитесь с нами сегодня, чтобы узнать, какой из
        вариантов подходит именно вам, и снизить регулярные обязательные платежи
        на сумму до 75%.
      </Description>
    </div>
  );
};

export default ApplicationOfTaxIncentives;
