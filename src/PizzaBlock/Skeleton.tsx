import ContentLoader from "react-content-loader";

const Skeleton = () => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={400}
    height={460}
    viewBox="0 0 400 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="114" cy="101" r="97" />
    <rect x="20" y="207" rx="0" ry="0" width="189" height="29" />
    <rect x="65" y="269" rx="0" ry="0" width="1" height="0" />
    <rect x="47" y="274" rx="0" ry="0" width="0" height="1" />
    <rect x="39" y="276" rx="0" ry="0" width="74" height="0" />
    <rect x="20" y="252" rx="0" ry="0" width="88" height="26" />
    <rect x="122" y="250" rx="0" ry="0" width="83" height="28" />
    <rect x="166" y="268" rx="0" ry="0" width="6" height="12" />
  </ContentLoader>
);

export default Skeleton;
