
import './App.css';
import News from "./News/News";
import {nanoid} from "nanoid";
import Rate from "./Rate/Rate";
import Search from "./Search/Search";
import Widgets from "./Widgets/Widgets";

function App() {
    const titleNews = ['Сейчас в СМИ','В Германии','Рекомендуем'];
    const news = [
        {
            titleList: 'Сейчас в СМИ',
            link: 'https://yandex.ru/news/story/Prezident_Putin_zayavil_chto_osnovanij_dlyaizmeneniya_pozicii_Evropy_pootnosheniyu_kRF_net--35141bb9591d3c15fa5b42e9eef1fa84?lang=ru&from=main_portal&fan=1&stid=rb56r8khdcjY7X5oTUzn&t=1650464426&persistent_id=193360286&story=3761a765-6988-5dc2-ae32-b1d0ceb50496&lr=101432&msid=1650464930976179-6235119007805024399-vla1-3880-vla-l7-balancer-8080-BAL-6427&mlid=1650464426.glob_225.35141bb9&utm_medium=topnews_news&utm_source=morda_desktop',
            img: 'https://www.lexisrex.com/gadgets/lafc/weather/smalljpg202347875.jpg',
            description: 'риа',
            id: nanoid(),
            text: 'Президент Путин заявил, что оснований для изменения позиции Европы по отношению к РФ нет'
        },
        {
            titleList: 'В Германии',
            link: 'https://yandex.ru/news/story/Prezident_Putin_podderzhal_ideyu_sispolneniem_gimna_i_podnyatiem_flaga_vshkolakh_Rossii--83bf73ec97e30e0fbc6cf13410327e05?lang=ru&from=main_portal&fan=1&stid=lT0lGlME0nkaS6EjWpfP&t=1650464426&persistent_id=193020758&story=0c544fed-d4bf-5be4-90a3-e045609045c1&lr=101432&msid=1650464930976179-6235119007805024399-vla1-3880-vla-l7-balancer-8080-BAL-6427&mlid=1650464426.glob_225.83bf73ec&utm_medium=topnews_news&utm_source=morda_desktop',
            img: 'http://cdn.novostinauki.ru/2018_06_21/31_100x100.stormlapse-01.885.jpg',
            description: 'газета.ру',
            id: nanoid(),
            text: 'Пресс-секретарь Путина Песков заявил о передаче Украине документа'
        },
        {
            titleList: 'Сейчас в СМИ',
            link: 'https://yandex.ru/news/story/Prezident_Putin_podderzhal_ideyu_sispolneniem_gimna_i_podnyatiem_flaga_vshkolakh_Rossii--83bf73ec97e30e0fbc6cf13410327e05?lang=ru&from=main_portal&fan=1&stid=lT0lGlME0nkaS6EjWpfP&t=1650464426&persistent_id=193020758&story=0c544fed-d4bf-5be4-90a3-e045609045c1&lr=101432&msid=1650464930976179-6235119007805024399-vla1-3880-vla-l7-balancer-8080-BAL-6427&mlid=1650464426.glob_225.83bf73ec&utm_medium=topnews_news&utm_source=morda_desktop',
            img: 'http://cdn.novostinauki.ru/2018_06_21/31_100x100.stormlapse-01.885.jpg',
            description: 'газета.ру',
            id: nanoid(),
            text: 'Пресс-секретарь Путина Песков заявил о передаче Украине документа'
        },
        {
            titleList: 'В Германии',
            link: 'https://yandex.ru/news/story/Prezident_Putin_podderzhal_ideyu_sispolneniem_gimna_i_podnyatiem_flaga_vshkolakh_Rossii--83bf73ec97e30e0fbc6cf13410327e05?lang=ru&from=main_portal&fan=1&stid=lT0lGlME0nkaS6EjWpfP&t=1650464426&persistent_id=193020758&story=0c544fed-d4bf-5be4-90a3-e045609045c1&lr=101432&msid=1650464930976179-6235119007805024399-vla1-3880-vla-l7-balancer-8080-BAL-6427&mlid=1650464426.glob_225.83bf73ec&utm_medium=topnews_news&utm_source=morda_desktop',
            img: 'http://cdn.novostinauki.ru/2018_06_21/31_100x100.stormlapse-01.885.jpg',
            description: 'газета.ру',
            id: nanoid(),
            text: 'Пресс-секретарь Путина Песков заявил о передаче Украине документа'
        },
        {
            titleList: 'Сейчас в СМИ',
            link: 'https://yandex.ru/news/story/Prezident_Putin_podderzhal_ideyu_sispolneniem_gimna_i_podnyatiem_flaga_vshkolakh_Rossii--83bf73ec97e30e0fbc6cf13410327e05?lang=ru&from=main_portal&fan=1&stid=lT0lGlME0nkaS6EjWpfP&t=1650464426&persistent_id=193020758&story=0c544fed-d4bf-5be4-90a3-e045609045c1&lr=101432&msid=1650464930976179-6235119007805024399-vla1-3880-vla-l7-balancer-8080-BAL-6427&mlid=1650464426.glob_225.83bf73ec&utm_medium=topnews_news&utm_source=morda_desktop',
            img: 'http://cdn.novostinauki.ru/2018_06_21/31_100x100.stormlapse-01.885.jpg',
            description: 'газета.ру',
            id: nanoid(),
            text: 'Пресс-секретарь Путина Песков заявил о передаче Украине документа'
        },
    ]
    const rates = [
        {
            id: nanoid(),
            link: 'https://yandex.ru/news/quotes/1.html?appsearch_header=1',
            title: 'USD',
            cur: '77,08',
            diff: '-1,95',
        },
        {
            id: nanoid(),
            link: 'https://yandex.ru/news/quotes/23.html?appsearch_header=1',
            title: 'EUR',
            cur: '83,27',
            diff: '-2.70',
        },
        {
            id: nanoid(),
            link: 'https://yandex.ru/news/quotes/1006.html?appsearch_header=1',
            title: 'НЕФТЬ',
            cur: '105,51',
            diff: '-0,35',
        },
    ]

    const searchTitles = [
        {
            id: nanoid(),
            link: 'https://market.yandex.ru/?clid=505&utm_source=main_stripe_big&src_pof=505&icookie=lkecYdNInftT1bEH8y48PC0DIHzh%2F6VMvGpxoFePCHbABLM4frIT1AWdsvQPFejAgBIPKZMSp37zkOwDjF9TxL%2F%2FLTY%3D&utm_source_service=morda',
            title: 'Маркет',
        },
        {
            id: nanoid(),
            link: 'https://yandex.ru/video/search?utm_source=main_stripe_big&text=%D0%B2%D0%B8%D0%B4%D0%B5%D0%BE',
            title: 'Видео',
        },
        {
            id: nanoid(),
            link: 'https://yandex.ru/images/?utm_source=main_stripe_big',
            title: 'Картинки',
        },
        {
            id: nanoid(),
            link: 'https://yandex.ru/news/?utm_source=main_stripe_big',
            title: 'Новости',
        },
        {
            id: nanoid(),
            link: 'https://yandex.ru/maps/?ll=37.729727%2C55.978720&utm_source=main_stripe_big&z=10',
            title: 'Карты',
        },
        {
            id: nanoid(),
            link: 'https://translate.yandex.ru/?utm_source=main_stripe_big',
            title: 'Переводчик',
        },
        {
            id: nanoid(),
            link: 'https://music.yandex.ru/home?utm_source=main_stripe_big',
            title: 'Музыка',
        },
    ]

    const dayLink =
        {
            link: 'https://yandex.ru/search/?lr=101432&text=%D0%B3%D0%B4%D0%B5+%D0%BA%D1%83%D0%BF%D0%B8%D1%82%D1%8C+%D0%B4%D0%BE%D0%BB%D0%BB%D0%B0%D1%80%D1%8B+%D0%B2+%D0%BC%D0%BE%D1%81%D0%BA%D0%B2%D0%B5&src=suggest_B',
            title: 'где купить доллары в москве',
        }
    const widgetsItems = [];

  return (
   <div className='container'>
     <News listTitle={titleNews} listNews={news}/>
       <Rate items={rates}/>
       <Search titles={searchTitles} dayLink={dayLink}/>
       <Widgets items={widgetsItems}/>
   </div>
  );
}

export default App;
