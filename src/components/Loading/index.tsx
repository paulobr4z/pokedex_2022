import { LoadingContainer } from './styles';

interface ILoading {
  loading: boolean;
}

export function Loading({
  loading,
}: ILoading) {
  return (
    <LoadingContainer>
      {
        loading &&
          <div>
            <div className="pokeball">
                <div className="pokeball__button"></div>
            </div>
            <h3>Loading. . .</h3>
          </div>
      }
    </LoadingContainer>
  )
}
