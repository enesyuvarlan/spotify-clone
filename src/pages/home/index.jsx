import Tab from "~/components/tab";
import {ForYou} from "~/pages/home/for-you/index.jsx";

export default function Home() {
  return (

    <Tab activeTab="for-you">
      <Tab.Items>
        <Tab.Item id='for-you'>
          For you
        </Tab.Item>
        <Tab.Item id='following'>
          Following
        </Tab.Item>
      </Tab.Items>
      <Tab.Content id='for-you'>
        <ForYou/>
      </Tab.Content>
      <Tab.Content id='following'>
        Following Content
      </Tab.Content>
    </Tab>
  )
}
