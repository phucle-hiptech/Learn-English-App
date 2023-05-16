import Account from '../screens/account';
import DetailNews from '../screens/detailNews';
import DetailReadBook from '../screens/detailReadBook';
import DetailVideo from '../screens/detailVideo';
import DetailWordGroup from '../screens/detailWordGroup';
import Exercise from '../screens/exercise';
import Grammar from '../screens/grammar';
import GrammarExercise from '../screens/grammarExercise';
import GrammarTheory from '../screens/grammarTheory';
import Home from '../screens/home';
import Library from '../screens/library';
import Login from '../screens/login';
import News from '../screens/news';
import PlayGame from '../screens/playGame';
import ReadBook from '../screens/readBook';
import ReadNews from '../screens/readNews';
import ReviewResult from '../screens/reviewResult';
import SearchWord from '../screens/searchWord';
import Signup from '../screens/signup';
import Test from '../screens/test';
import TestResult from '../screens/testResult';
import VerifyPhoneNumber from '../screens/verifyPhoneNumber';
import VerifyOTP from '../screens/verifyOTP';
import SettingNewPassword from '../screens/settingNewPassword';
import Videos from '../screens/videos';
import Welcome from '../screens/welcome';
import WordGroup from '../screens/wordGroup';
import Words from '../screens/words';

const screens = [
    {
        name: 'Home',
        component: Home,
        tabIconName: 'home-outline',
        tabIconSize: 30,
        tabIconColor: '#faa0a0',
        activeColor: '#ee4b2b',
        isHideTab: false,
        isHideNavigationTab: false,
    },
    {
        name: 'Library',
        component: Library,
        tabIconName: 'home-outline',
        tabIconSize: 30,
        tabIconColor: '#faa0a0',
        activeColor: '#ee4b2b',
        isHideTab: false,
        isHideNavigationTab: false,
    },
    {
        name: 'Account',
        component: Account,
        tabIconName: 'home-outline',
        tabIconSize: 30,
        tabIconColor: '#faa0a0',
        activeColor: '#ee4b2b',
        isHideTab: false,
        isHideNavigationTab: false,
    },
    {
        name: 'SearchWord',
        component: SearchWord,
        tabIconName: 'home-outline',
        tabIconSize: 30,
        tabIconColor: '#faa0a0',
        activeColor: '#ee4b2b',
        isHideTab: true,
        isHideNavigationTab: false,
    },
    {
        name: 'News',
        component: News,
        tabIconName: 'home-outline',
        tabIconSize: 30,
        tabIconColor: '#faa0a0',
        activeColor: '#ee4b2b',
        isHideTab: true,
        isHideNavigationTab: false,
    },
    {
        name: 'ReadNews',
        component: ReadNews,
        tabIconName: 'home-outline',
        tabIconSize: 30,
        tabIconColor: '#faa0a0',
        activeColor: '#ee4b2b',
        isHideTab: true,
        isHideNavigationTab: false,
    },
    {
        name: 'DetailNews',
        component: DetailNews,
        tabIconName: 'home-outline',
        tabIconSize: 30,
        tabIconColor: '#faa0a0',
        activeColor: '#ee4b2b',
        isHideTab: true,
        isHideNavigationTab: false,
    },
    {
        name: 'Videos',
        component: Videos,
        tabIconName: 'home-outline',
        tabIconSize: 30,
        tabIconColor: '#faa0a0',
        activeColor: '#ee4b2b',
        isHideTab: true,
        isHideNavigationTab: false,
    },
    {
        name: 'DetailVideo',
        component: DetailVideo,
        tabIconName: 'home-outline',
        tabIconSize: 30,
        tabIconColor: '#faa0a0',
        activeColor: '#ee4b2b',
        isHideTab: true,
        isHideNavigationTab: false,
    },
    {
        name: 'ReadBook',
        component: ReadBook,
        tabIconName: 'home-outline',
        tabIconSize: 30,
        tabIconColor: '#faa0a0',
        activeColor: '#ee4b2b',
        isHideTab: true,
        isHideNavigationTab: false,
    },
    {
        name: 'DetailReadBook',
        component: DetailReadBook,
        tabIconName: 'home-outline',
        tabIconSize: 30,
        tabIconColor: '#faa0a0',
        activeColor: '#ee4b2b',
        isHideTab: true,
        isHideNavigationTab: false,
    },
    {
        name: 'WordGroup',
        component: WordGroup,
        tabIconName: 'home-outline',
        tabIconSize: 30,
        tabIconColor: '#faa0a0',
        activeColor: '#ee4b2b',
        isHideTab: true,
        isHideNavigationTab: false,
    },
    {
        name: 'DetailWordGroup',
        component: DetailWordGroup,
        tabIconName: 'home-outline',
        tabIconSize: 30,
        tabIconColor: '#faa0a0',
        activeColor: '#ee4b2b',
        isHideTab: true,
        isHideNavigationTab: false,
    },
    {
        name: 'Grammar',
        component: Grammar,
        tabIconName: 'home-outline',
        tabIconSize: 30,
        tabIconColor: '#faa0a0',
        activeColor: '#ee4b2b',
        isHideTab: true,
        isHideNavigationTab: false,
    },
    {
        name: 'GrammarTheory',
        component: GrammarTheory,
        tabIconName: 'home-outline',
        tabIconSize: 30,
        tabIconColor: '#faa0a0',
        activeColor: '#ee4b2b',
        isHideTab: true,
        isHideNavigationTab: false,
    },
    {
        name: 'GrammarExercise',
        component: GrammarExercise,
        tabIconName: 'home-outline',
        tabIconSize: 30,
        tabIconColor: '#faa0a0',
        activeColor: '#ee4b2b',
        isHideTab: true,
        isHideNavigationTab: false,
    },
    {
        name: 'Exercise',
        component: Exercise,
        tabIconName: 'home-outline',
        tabIconSize: 30,
        tabIconColor: '#faa0a0',
        activeColor: '#ee4b2b',
        isHideTab: true,
        isHideNavigationTab: false,
    },
    {
        name: 'ReviewResult',
        component: ReviewResult,
        tabIconName: 'home-outline',
        tabIconSize: 30,
        tabIconColor: '#faa0a0',
        activeColor: '#ee4b2b',
        isHideTab: true,
        isHideNavigationTab: false,
    },
    {
        name: 'TestResult',
        component: TestResult,
        tabIconName: 'home-outline',
        tabIconSize: 30,
        tabIconColor: '#faa0a0',
        activeColor: '#ee4b2b',
        isHideTab: true,
        isHideNavigationTab: false,
    },
    {
        name: 'Test',
        component: Test,
        tabIconName: 'home-outline',
        tabIconSize: 30,
        tabIconColor: '#faa0a0',
        activeColor: '#ee4b2b',
        isHideTab: true,
        isHideNavigationTab: false,
    },
    {
        name: 'Login',
        component: Login,
        tabIconName: 'home-outline',
        tabIconSize: 30,
        tabIconColor: '#faa0a0',
        activeColor: '#ee4b2b',
        isHideTab: true,
        isHideNavigationTab: true,
    },
    {
        name: 'Signup',
        component: Signup,
        tabIconName: 'home-outline',
        tabIconSize: 30,
        tabIconColor: '#faa0a0',
        activeColor: '#ee4b2b',
        isHideTab: true,
        isHideNavigationTab: true,
    },
    {
        name: 'Welcome',
        component: Welcome,
        tabIconName: 'home-outline',
        tabIconSize: 30,
        tabIconColor: '#faa0a0',
        activeColor: '#ee4b2b',
        isHideTab: true,
        isHideNavigationTab: true,
    },
];

export default screens;
