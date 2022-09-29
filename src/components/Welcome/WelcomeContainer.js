import WelcomeTitle from './WelcomeTitle';
import WelcomeSubtitle from './WelcomeSubtitle';
import WelcomeLinks from './WelcomeLinks';
import { ReactComponent as TriangleDivider } from '../../img/triangle-divider.svg';

function WelcomeContainer(props) {
    return (
        <div className="w-full h-full flex justify-center 2xl:justify-start items-center 2xl:pl-60 dark:bg-stone-900 bg-stone-200 duration-500 relative">
          <div className='absolute bottom-0 left-0 w-full overflow-hidden leading-[0]'>
            <TriangleDivider className='relative block triangle-div-width h-[78px] dark:fill-stone-800 fill-stone-100 duration-150'/>
          </div>
          <div className="flex justify-center min-w-fit h-96 flex-col gap-3 p-10">
            <WelcomeTitle/>
            <WelcomeSubtitle/>
            <WelcomeLinks/>
          </div>
        </div>
    );
}

export default WelcomeContainer;