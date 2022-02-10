import { ContainerLoaderImage } from './styles';

interface ILoaderImage {
  isLoading: boolean;
}

export default function LoaderImage({
  isLoading,
}: ILoaderImage) {
  return (
    <ContainerLoaderImage isLoading={isLoading}>
      <div className="lds-ring">
        <div />
        <div />
        <div />
        <div />
      </div>
    </ContainerLoaderImage>
  )
}
