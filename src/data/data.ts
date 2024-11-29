import rev1 from '../img/feedback/rev1.webp';
import rev2 from '../img/feedback/rev2.webp';
import rev3 from '../img/feedback/rev3.webp';
import rev4 from '../img/feedback/rev4.webp';
import rev5 from '../img/feedback/rev5.webp';
import rev6 from '../img/feedback/rev6.webp';
import rev7 from '../img/feedback/rev7.webp';
import rev8 from '../img/feedback/rev8.webp';
import rev9 from '../img/feedback/rev9.webp';

import bells from '../img/study/bells.webp';
import book from '../img/study/book.webp';
import chat from '../img/study/chat.webp';
import lamp from '../img/study/lamp.webp';
import money from '../img/study/money.webp';
import volume from '../img/study/volume.webp';

interface ProgramItem {
  itemsHeader: string;
  time: {
    first: string;
    second: string;
    third: string;
    fourth: string;
  };
  quests: {
    first: string;
    second: string;
  };
  tests: {
    first: string;
    second: string;
  };
  itemsText: string;
  itemsBlock: {
    first?: {
      first: string;
      second: string;
    };
    second?: {
      first: string;
      second: string;
    };
    third?: {
      first: string;
      second: string;
    };
    fourth?: {
      first: string;
      second: string;
    };
    fifth?: {
      first: string;
      second: string;
    };
    sixth?: {
      first: string;
      second: string;
    };
  };
}

export const heroItems = [
  {
    text: {
      first: 'Hero.blockText.first.first',
      second: 'Hero.blockText.first.second',
      third: 'Hero.blockText.first.third',
    },
    img: 'icon-shuttle-hero',
  },
  {
    text: {
      first: 'Hero.blockText.second.first',
      second: 'Hero.blockText.second.second',
      third: 'Hero.blockText.second.third',
    },
    img: 'icon-management-hero',
  },
  {
    text: {
      first: 'Hero.blockText.third.first',
      second: 'Hero.blockText.third.second',
      third: 'Hero.blockText.third.third',
    },
    img: 'icon-budgeting-hero',
  },
];

export const opportunitiesItems = [
  {
    text: 'Opportunities.blockText.first',
    header: 'Opportunities.blockHeader.first',
    logo: 'icon-control-panel-opportunities',
  },
  {
    text: 'Opportunities.blockText.second',
    header: 'Opportunities.blockHeader.second',
    logo: 'icon-transparent-opportunities',
  },
  {
    text: 'Opportunities.blockText.third',
    header: 'Opportunities.blockHeader.third',
    logo: 'icon-bank-opportunities',
  },
  {
    text: 'Opportunities.blockText.fourth',
    header: 'Opportunities.blockHeader.fourth',
    logo: 'icon-check-opportunities',
  },
  {
    text: 'Opportunities.blockText.fifth',
    header: 'Opportunities.blockHeader.fifth',
    logo: 'icon-bar-chart-opportunities',
  },
  {
    text: 'Opportunities.blockText.sixth',
    header: 'Opportunities.blockHeader.sixth',
    logo: 'icon-risk-opportunities',
  },
];

export const studyItems = [
  {
    header: 'Study.itemsHeader.first',
    title: 'Study.itemsTitle.first',
    text: 'Study.itemsText.first',
    logo: money,
  },
  {
    header: 'Study.itemsHeader.second',
    title: 'Study.itemsTitle.second',
    text: 'Study.itemsText.second',
    logo: bells,
  },
  {
    header: 'Study.itemsHeader.third',
    title: 'Study.itemsTitle.third',
    text: 'Study.itemsText.third',
    logo: chat,
  },
  {
    header: 'Study.itemsHeader.fourth',
    title: 'Study.itemsTitle.fourth',
    text: 'Study.itemsText.fourth',
    logo: volume,
  },
  {
    header: 'Study.itemsHeader.fifth',
    title: 'Study.itemsTitle.fifth',
    text: 'Study.itemsText.fifth',
    logo: book,
  },
  {
    header: 'Study.itemsHeader.sixth',
    title: 'Study.itemsTitle.sixth',
    text: 'Study.itemsText.sixth',
    logo: lamp,
  },
];

export const programItems: ProgramItem[] = [
  {
    itemsHeader: 'Program.itemsHeader.first',
    time: {
      first: 'Program.time.first.first',
      second: 'Program.time.first.second',
      third: 'Program.time.first.third',
      fourth: 'Program.time.first.fourth',
    },
    quests: {
      first: 'Program.quests.first.first',
      second: 'Program.quests.first.second',
    },
    tests: {
      first: 'Program.tests.first.first',
      second: 'Program.tests.first.second',
    },
    itemsText: 'Program.itemsText.first',
    itemsBlock: {
      first: {
        first: 'Program.itemsBlock.first.first.first',
        second: 'Program.itemsBlock.first.first.second',
      },
      second: {
        first: 'Program.itemsBlock.first.second.first',
        second: 'Program.itemsBlock.first.second.second',
      },
      third: {
        first: 'Program.itemsBlock.first.third.first',
        second: 'Program.itemsBlock.first.third.second',
      },
      fourth: {
        first: 'Program.itemsBlock.first.fourth.first',
        second: 'Program.itemsBlock.first.fourth.second',
      },
      fifth: {
        first: 'Program.itemsBlock.first.fifth.first',
        second: 'Program.itemsBlock.first.fifth.second',
      },
      sixth: {
        first: 'Program.itemsBlock.first.sixth.first',
        second: 'Program.itemsBlock.first.sixth.second',
      },
    },
  },
  {
    itemsHeader: 'Program.itemsHeader.second',
    time: {
      first: 'Program.time.second.first',
      second: 'Program.time.second.second',
      third: 'Program.time.second.third',
      fourth: 'Program.time.second.fourth',
    },
    quests: {
      first: 'Program.quests.second.first',
      second: 'Program.quests.second.second',
    },
    tests: {
      first: 'Program.tests.second.first',
      second: 'Program.tests.second.second',
    },
    itemsText: 'Program.itemsText.second',
    itemsBlock: {
      first: {
        first: 'Program.itemsBlock.second.first.first',
        second: 'Program.itemsBlock.second.first.second',
      },
      second: {
        first: 'Program.itemsBlock.second.second.first',
        second: 'Program.itemsBlock.second.second.second',
      },
      third: {
        first: 'Program.itemsBlock.second.third.first',
        second: 'Program.itemsBlock.second.third.second',
      },
      fourth: {
        first: 'Program.itemsBlock.second.fourth.first',
        second: 'Program.itemsBlock.second.fourth.second',
      },
      fifth: {
        first: 'Program.itemsBlock.second.fifth.first',
        second: 'Program.itemsBlock.second.fifth.second',
      },
    },
  },
  {
    itemsHeader: 'Program.itemsHeader.third',
    time: {
      first: 'Program.time.third.first',
      second: 'Program.time.third.second',
      third: 'Program.time.third.third',
      fourth: 'Program.time.third.fourth',
    },
    quests: {
      first: 'Program.quests.third.first',
      second: 'Program.quests.third.second',
    },
    tests: {
      first: 'Program.tests.third.first',
      second: 'Program.tests.third.second',
    },
    itemsText: 'Program.itemsText.third',
    itemsBlock: {
      first: {
        first: 'Program.itemsBlock.third.first.first',
        second: 'Program.itemsBlock.third.first.second',
      },
      second: {
        first: 'Program.itemsBlock.third.second.first',
        second: 'Program.itemsBlock.third.second.second',
      },
      third: {
        first: 'Program.itemsBlock.third.third.first',
        second: 'Program.itemsBlock.third.third.second',
      },
      fourth: {
        first: 'Program.itemsBlock.third.fourth.first',
        second: 'Program.itemsBlock.third.fourth.second',
      },
      fifth: {
        first: 'Program.itemsBlock.third.fifth.first',
        second: 'Program.itemsBlock.third.fifth.second',
      },
      sixth: {
        first: 'Program.itemsBlock.third.sixth.first',
        second: 'Program.itemsBlock.third.sixth.second',
      },
    },
  },
  {
    itemsHeader: 'Program.itemsHeader.fourth',
    time: {
      first: 'Program.time.fourth.first',
      second: 'Program.time.fourth.second',
      third: 'Program.time.fourth.third',
      fourth: 'Program.time.fourth.fourth',
    },
    quests: {
      first: 'Program.quests.fourth.first',
      second: 'Program.quests.fourth.second',
    },
    tests: {
      first: 'Program.tests.fourth.first',
      second: 'Program.tests.fourth.second',
    },
    itemsText: 'Program.itemsText.fourth',
    itemsBlock: {
      first: {
        first: 'Program.itemsBlock.fourth.first.first',
        second: 'Program.itemsBlock.fourth.first.second',
      },
      second: {
        first: 'Program.itemsBlock.fourth.second.first',
        second: 'Program.itemsBlock.fourth.second.second',
      },
      third: {
        first: 'Program.itemsBlock.fourth.third.first',
        second: 'Program.itemsBlock.fourth.third.second',
      },
      fourth: {
        first: 'Program.itemsBlock.fourth.fourth.first',
        second: 'Program.itemsBlock.fourth.fourth.second',
      },
    },
  },
  {
    itemsHeader: 'Program.itemsHeader.fifth',
    time: {
      first: 'Program.time.fifth.first',
      second: 'Program.time.fifth.second',
      third: 'Program.time.fifth.third',
      fourth: 'Program.time.fifth.fourth',
    },
    quests: {
      first: 'Program.quests.fifth.first',
      second: 'Program.quests.fifth.second',
    },
    tests: {
      first: 'Program.tests.fifth.first',
      second: 'Program.tests.fifth.second',
    },
    itemsText: 'Program.itemsText.fifth',
    itemsBlock: {
      first: {
        first: 'Program.itemsBlock.fifth.first.first',
        second: 'Program.itemsBlock.fifth.first.second',
      },
      second: {
        first: 'Program.itemsBlock.fifth.second.first',
        second: 'Program.itemsBlock.fifth.second.second',
      },
      third: {
        first: 'Program.itemsBlock.fifth.third.first',
        second: 'Program.itemsBlock.fifth.third.second',
      },
      fourth: {
        first: 'Program.itemsBlock.fifth.fourth.first',
        second: 'Program.itemsBlock.fifth.fourth.second',
      },
      fifth: {
        first: 'Program.itemsBlock.fifth.fifth.first',
        second: 'Program.itemsBlock.fifth.fifth.second',
      },
      sixth: {
        first: 'Program.itemsBlock.fifth.sixth.first',
        second: 'Program.itemsBlock.fifth.sixth.second',
      },
    },
  },
  {
    itemsHeader: 'Program.itemsHeader.sixth',
    time: {
      first: 'Program.time.sixth.first',
      second: 'Program.time.sixth.second',
      third: 'Program.time.sixth.third',
      fourth: 'Program.time.sixth.fourth',
    },
    quests: {
      first: 'Program.quests.sixth.first',
      second: 'Program.quests.sixth.second',
    },
    tests: {
      first: 'Program.tests.sixth.first',
      second: 'Program.tests.sixth.second',
    },
    itemsText: 'Program.itemsText.sixth',
    itemsBlock: {
      first: {
        first: 'Program.itemsBlock.sixth.first.first',
        second: 'Program.itemsBlock.sixth.first.second',
      },
      second: {
        first: 'Program.itemsBlock.sixth.second.first',
        second: 'Program.itemsBlock.sixth.second.second',
      },
      third: {
        first: 'Program.itemsBlock.sixth.third.first',
        second: 'Program.itemsBlock.sixth.third.second',
      },
      fourth: {
        first: 'Program.itemsBlock.sixth.fourth.first',
        second: 'Program.itemsBlock.sixth.fourth.second',
      },
      fifth: {
        first: 'Program.itemsBlock.sixth.fifth.first',
        second: 'Program.itemsBlock.sixth.fifth.second',
      },
      sixth: {
        first: 'Program.itemsBlock.sixth.sixth.first',
        second: 'Program.itemsBlock.sixth.sixth.second',
      },
    },
  },
  {
    itemsHeader: 'Program.itemsHeader.seventh',
    time: {
      first: 'Program.time.seventh.first',
      second: 'Program.time.seventh.second',
      third: 'Program.time.seventh.third',
      fourth: 'Program.time.seventh.fourth',
    },
    quests: {
      first: 'Program.quests.seventh.first',
      second: 'Program.quests.seventh.second',
    },
    tests: {
      first: 'Program.tests.seventh.first',
      second: 'Program.tests.seventh.second',
    },
    itemsText: 'Program.itemsText.seventh',
    itemsBlock: {
      first: {
        first: 'Program.itemsBlock.seventh.first.first',
        second: 'Program.itemsBlock.seventh.first.second',
      },
    },
  },
  {
    itemsHeader: 'Program.itemsHeader.eighth',
    time: {
      first: 'Program.time.eighth.first',
      second: 'Program.time.eighth.second',
      third: 'Program.time.eighth.third',
      fourth: 'Program.time.eighth.fourth',
    },
    quests: {
      first: 'Program.quests.eighth.first',
      second: 'Program.quests.eighth.second',
    },
    tests: {
      first: 'Program.tests.eighth.first',
      second: 'Program.tests.eighth.second',
    },
    itemsText: 'Program.itemsText.eighth',
    itemsBlock: {
      first: {
        first: 'Program.itemsBlock.eighth.first.first',
        second: 'Program.itemsBlock.eighth.first.second',
      },
      second: {
        first: 'Program.itemsBlock.eighth.second.first',
        second: 'Program.itemsBlock.eighth.second.second',
      },
      third: {
        first: 'Program.itemsBlock.eighth.third.first',
        second: 'Program.itemsBlock.eighth.third.second',
      },
      fourth: {
        first: 'Program.itemsBlock.eighth.fourth.first',
        second: 'Program.itemsBlock.eighth.fourth.second',
      },
    },
  },
];

export const feedbackItems = [
  rev1,
  rev2,
  rev3,
  rev4,
  rev5,
  rev6,
  rev7,
  rev8,
  rev9,
];

export const answersItems = [
  {
    itemsId: '01.',
    itemsHeader: 'Answers.itemsHeader.first',
    itemsText: 'Answers.itemsText.first',
  },
  {
    itemsId: '02.',
    itemsHeader: 'Answers.itemsHeader.second',
    itemsText: 'Answers.itemsText.second',
  },
  {
    itemsId: '03.',
    itemsHeader: 'Answers.itemsHeader.third',
    itemsText: 'Answers.itemsText.third',
  },
  {
    itemsId: '04.',
    itemsHeader: 'Answers.itemsHeader.fourth',
    itemsText: 'Answers.itemsText.fourth',
  },
  {
    itemsId: '05.',
    itemsHeader: 'Answers.itemsHeader.fifth',
    itemsText: 'Answers.itemsText.fifth',
  },
  {
    itemsId: '06.',
    itemsHeader: 'Answers.itemsHeader.sixth',
    itemsText: 'Answers.itemsText.sixth',
  },
  {
    itemsId: '07.',
    itemsHeader: 'Answers.itemsHeader.seventh',
    itemsText: 'Answers.itemsText.seventh',
  },
];

export const menuItems = [
  { label: 'Footer.menu.advantages', href: '#advantages' },
  { label: 'Footer.menu.about', href: '#about' },
  { label: 'Footer.menu.program', href: '#program' },
  { label: 'Footer.menu.feedback', href: '#feedback' },
  { label: 'Footer.menu.faq', href: '#faq' },
];

export const socialItems = [
  { icon: 'icon-tg', link: 'https://t.me/usaffiliate' },
  { icon: 'icon-youtube', link: 'https://www.youtube.com/@usaffiliate' },
  { icon: 'icon-tik', link: 'https://www.tiktok.com/@mustage.io' },
];
