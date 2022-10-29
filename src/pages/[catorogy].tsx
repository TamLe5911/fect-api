

import {useRouter} from 'next/router'
import { InfomationGetDetail } from '../components/index/detail';
import { Main } from '../layout/Main';
import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';

const InfomationDetail = () => {
  const router = useRouter()
  const { catorogy } = router.query
  return (
  <Main
    meta={<Meta title={AppConfig.title} description={AppConfig.description} />}
  >
    <div>
      <div className="container-fluid other-page flex">
       
        <div className='right-side'>
          {
            catorogy && <InfomationGetDetail catorogy={catorogy as string}/>
          }
        </div>
      </div>
    </div>
  </Main>
  )
  
  };

export default InfomationDetail;
