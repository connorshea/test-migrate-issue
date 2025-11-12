import Foo from './Foo';

export const Example: React.FC<{
  data: any[];
}> = ({ data }) => {
  const app = data[0];

  if (!app) {
    return (
      <div className='annual-report__bento__box annual-report__summary__most-used-app' />
    );
  }

  return (
    <div className='annual-report__bento__box annual-report__summary__most-used-app'>
      <div className='annual-report__summary__most-used-app__icon'>
        {app.name}
      </div>
      <div className='annual-report__summary__most-used-app__label'>
        <Foo
          id='annual_report.summary.most_used_app.most_used_app'
          defaultMessage='most used app'
        />
      </div>
    </div>
  );
};
