import ServiceCard from "../../../components/Card/ServiceCard";
import HeadBreadcrumb from "../../../components/HeadBreadcrumb";
import s_img from "../../../assets/images/services/expertise/contruction_and_technical_expert/increase_in_construction_сosts_expert.jpeg";
import Description from "../../../components/Typography/Description";
import Title from "../../../components/Typography/Title";
import LiColored from "../../../components/Typography/LiColored";
import PhoneNumber from "../../../components/Typography/PhoneNumber";

const IncreaseInConstructionCostsExpert = () => {
  return (
    <div>
      <HeadBreadcrumb
        items={[
          {
            title: "Экспертиза",
          },
          {
            title: "Строительно-техническая",
          },
          {
            title: "Экспертиза удорожания стоимости строительства",
          },
        ]}
      />
      <ServiceCard
        img={s_img}
        title="Экспертиза удорожания стоимости строительства"
        price={30000}
        deadline="от 10 дней"
      />{" "}
      <Description>
        Удорожание стоимости строительства — нередкое явление, с которым
        сталкиваются заказчики. Если заранее оговоренные и утвержденные в смете
        затраты изменились в большую сторону, важно разобраться в причинах.
        Именно для этого, как правило, и нужна экспертиза, которая поможет
        установить, объективно или нет произошло это удорожание и кто должен
        нести за него ответственность.
      </Description>
      <Description>
        Заказать экспертизу может как заказчик работ, который считает повышение
        стоимости несправедливым, так и исполнитель, если из-за неких
        независящих от него факторов он рискует остаться без прибыли.
      </Description>
      <Title>Необъективные причины</Title>
      <Description>
        Когда речь идет о необъективных причинах, это, как правило, вина
        подрядчика. Он несет ответственность за увеличение стоимости работ, если
        оно связано с его недостаточной компетентностью в управлении
        строительным процессом.
      </Description>
      <Description>К необъективным причинам относятся:</Description>
      <LiColored>изначально неправильный расчет,</LiColored>
      <LiColored>завышение расценок в смете,</LiColored>
      <LiColored>
        нецелевое использование строительных материалов, их неправильное
        хранение или же банальное хищение.
      </LiColored>
      <Title>Объективные причины</Title>
      <Description>
        На стоимость строительства могут повлиять и объективные факторы, которые
        подрядчик не может контролировать. Если причина удорожания объясняется
        объективными причинами, то закон дает исполнителю работ право требовать
        от заказчика коррекции сумм, закрепленных в договоре.
      </Description>
      <Description>
        Ниже перечислены основные (хотя и не все) факторы, изменяющие стоимость
        строительства, не связанные с действиями подрядчика:
      </Description>
      <LiColored>инфляция;</LiColored>
      <LiColored>рост или падение курса валют;</LiColored>
      <LiColored>
        аномальные погодные сдвиги, такие как несезонные холода, жара или
        осадки, превышающие привычную норму;
      </LiColored>
      <LiColored>
        форс-мажорные обстоятельства, вызванные природными катаклизмами (цунами,
        ураганы, пожары и т. д.);
      </LiColored>
      <LiColored>
        подорожание сырья, необходимого для изготовления строительных
        материалов;
      </LiColored>
      <LiColored>
        внедрение новых технологий строительства или производства материалов и
        оборудования;
      </LiColored>
      <LiColored>
        нововведения в налоговой системе, связанные, например, с порядком или
        размером налоговых выплат;
      </LiColored>
      <LiColored>
        изменения в законодательстве, которые могут потребовать сбора
        дополнительной документации, а также способны привести к временной или
        даже полной остановке строительства;
      </LiColored>
      <LiColored>
        забастовки рабочих из связанных со строительством сфер, приведшие к
        увеличению сроков строительства;
      </LiColored>
      <LiColored>рост цены на услуги субподрядчиков;</LiColored>
      <LiColored>
        непредвиденные обстоятельства (такие, как необходимость осушения или,
        наоборот, орошения земель, а также подводка дополнительных коммуникаций
        и т. д.).
      </LiColored>
      <Title>Как проходит анализ причин роста стоимости строительства</Title>
      <Description>
        Экспертизу проводят знающие специалисты по строительству, монтажу,
        управлению и экономике. Они изучают всю имеющуюся у сторон документацию:
      </Description>
      <LiColored>проект и сметы,</LiColored>
      <LiColored>отчеты и заключения,</LiColored>
      <LiColored>акты о выполнении работ и счета-фактуры,</LiColored>
      <LiColored>
        договоры с третьими лицами, задействованными в строительстве объекта.
      </LiColored>
      <Description>
        Данные должны быть максимально подробными. Также эксперты запрашивают у
        подрядчика детальную информацию о причинах удорожания и скрупулезно
        изучают ее.
      </Description>
      <Description>
        Основная задача экспертов заключается в том, чтобы определить несколько
        параметров.
      </Description>
      <Description>
        Во-первых, насколько рационально подрядчик подошел к составлению сметы,
        не была ли стоимость изначально занижена (иногда исполнители умышленно
        указывают меньшую сумму, чтобы получить тендер).
      </Description>
      <Description>
        Во-вторых, возможно ли было еще на этапе составления сметы предусмотреть
        необходимые траты.
      </Description>
      <Description>
        В-третьих, необходимо ли было задействовать дополнительные средства и
        является ли сумма адекватной и обоснованной.
      </Description>
      <Description>
        В-четвертых, был ли заказчик строительства вовремя проинформирован
        исполнителем о росте расходов.
      </Description>
      <Title>На какие вопросы даются ответы в ходе экспертизы</Title>
      <Description>
        Обращаясь за экспертизой, компания вправе рассчитывать на получение
        следующих данных:
      </Description>
      <LiColored>
        какие факторы вызвали удорожание стоимости строительства и были ли они
        объективными;
      </LiColored>
      <LiColored>есть ли вина подрядчика в удорожании;</LiColored>
      <LiColored>
        вся ли сумма удорожания вызвана объективными причинами или только ее
        часть;
      </LiColored>
      <LiColored>
        существуют ли доказательства перерасхода средств подрядчиком;
      </LiColored>
      <LiColored>
        не была ли цена на услуги подрядчика изначально завышенной или
        заниженной;
      </LiColored>
      <LiColored>
        существовала ли возможность заранее предусмотреть дополнительные траты.
      </LiColored>
      <Description>
        Чтобы установить все эти обстоятельства, эксперты тщательно проверяют
        все обстоятельства, указанные подрядчиком в качестве причин роста
        стоимости. Если компания-исполнитель ссылается на погодные условия, то
        эксперты запросят у него фото- и видеодоказательства. Также специалисты
        проверят данные метеорологических станций, при необходимости проведут
        лабораторные исследования и изучат объект строительства, чтобы
        установить, действительно ли погодные условия как-то отразились на
        стройке.
      </Description>
      <Description>
        Если подрядчик говорит о забастовках, которые привели к увеличению
        расходов, то оцениваются доказательства того, что эти забастовки
        действительно имели место и повлияли на процесс строительства.
      </Description>
      <Description>
        Если в качестве причины фигурируют изменения в законодательстве, то
        эксперты также тщательно проверят эту информацию: действительно ли эти
        изменения происходили и как они отразились, например, на закупке
        материалов или на других действиях исполнителя работ. Для этого строится
        специальная временная шкала, на которую наносятся даты вступления в силу
        новых правил и даты, когда подрядчик производил какие-то действия.
      </Description>
      <Description>
        Эксперты проверят и необходимость дополнительных работ (осушение почвы,
        ирригация, подводка коммуникаций и прочее). Более того, специалисты
        установят, можно ли было предусмотреть эту трату на этапе составления
        сметы. Сметам вообще уделяется большое внимание при проведении анализа,
        так как зачастую именно в них кроется причина удорожания. Как уже было
        сказано выше, подрядчик может намеренно занижать стоимость работ, чтобы
        привлечь клиента. Указанные в договоре цены сравниваются со средними по
        рынку, чтобы выявить возможное занижение или завышение.
      </Description>
      <Description>
        Кроме того, эксперты уделяют большое внимание деловой репутации
        исполнителя. Очень важно выяснить, были ли у него ранее подобные
        конфликтные ситуации, проводилась ли в отношении него когда-либо
        аналогичная экспертиза и, если да, каков был ее результат. Эти данные
        включаются в итоговый отчет экспертной комиссии.
      </Description>
      <Title>Результаты экспертизы</Title>
      <Description>
        Когда проверка завершена, ее инициатор получает экспертное заключение,
        которое включает в себя копии всех исследованных материалов, включая
        фото и видео. Также в отчете содержатся пояснения и выводы специалистов.
      </Description>
      <Description>
        В экспертном заключении описываются факторы, повлиявшие на увеличение
        стоимости строительства, с указанием того, носят ли они объективный
        характер или являются следствием ненадлежащего исполнения подрядчиком
        своих обязательств.
      </Description>
      <Description>
        Документ, подписанный экспертом или группой экспертов, проводивших
        экспертизу, является доказательной базой и может быть использован в
        суде. Также он может стать основой для нового договора с подрядчиком на
        основе полученных выводов.
      </Description>
      <Description>
        Для заказа услуги свяжитесь с нами по телефону <PhoneNumber />.
        Специалисты компании «АИС ПЕРЕВОДЧИК» ответят на интересующие вопросы в будние
        дни с 9.00 до 18.00.
      </Description>
    </div>
  );
};

export default IncreaseInConstructionCostsExpert;