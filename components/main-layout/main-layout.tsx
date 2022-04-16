import { LayoutProps } from "@types/page-with-layout"

const MainLayout: LayoutProps = ({ children }) => {
  return (
    <div>
      Main: 
      {children}
    </div>
  )
}
export default MainLayout