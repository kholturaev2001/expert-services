import DTable from "../DTable";
import TableContainer from "../TableContainer";

const TranslationToLang = () => {
  return (
    <TableContainer>
      <br />
      <DTable
        dataSource={[
          {
            key: "1",
            language_name: "Европейские языки",
            price: "от 450",
          },
          {
            key: "2",
            language_name: "Языки СНГ",
            price: "от 450",
          },
          {
            key: "3",
            language_name: "Балтийские языки",
            price: "от 500",
          },
          {
            key: "4",
            language_name: "Восточные языки",
            price: "от 700",
          },
        ]}
        columns={[
          {
            dataIndex: "language_name",
            key: "language_name",
            title: "Перевод на язык",
          },
          {
            dataIndex: "price",
            key: "price",
            width: "25%",
            title: "Цена",
          },
        ]}
        bordered
      />
    </TableContainer>
  );
};

export default TranslationToLang;
