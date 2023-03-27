import { Ui } from '@nextorg/ui';
import { api } from '@nextorg/api';

export async function getServerSideProps() {
  const data = await api();
  return {
    props: {
      message: data.message,
    },
  };
}

export function Index(props: { message: string }) {
  return (
    <Ui>
      Hello {props.message}
    </Ui>
  );
}

export default Index;
