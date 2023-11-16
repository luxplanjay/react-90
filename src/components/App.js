import { Layout } from './Layout';
// import { SkipMountEffect } from './SkipMountEffect';
// import { RefExample } from './RefExample';
// import { UseMemoExample } from './UseMemoExample';
// import { HttpReqAbort } from './HttpReqAbort';
import { HttpReqAbortOnEvent } from './HttpReqAbortOnEvent';

export const App = () => {
  return (
    <Layout>
      {/* <SkipMountEffect /> */}
      {/* <RefExample /> */}
      {/* <UseMemoExample /> */}
      {/* <HttpReqAbort /> */}
      <HttpReqAbortOnEvent />
    </Layout>
  );
};
