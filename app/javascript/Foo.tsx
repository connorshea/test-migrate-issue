const Foo: React.FC<{
  id: string;
  defaultMessage: string;
}> = ({ id, defaultMessage }) => {
  return <div>{id}: {defaultMessage}</div>;
};

export default Foo;
