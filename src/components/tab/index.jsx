import Items from "~/components/tab/items";
import Item from "~/components/tab/item";
import Content from "~/components/tab/content";
import PropTypes from "prop-types";
import {TabContext} from "~/components/tab/context";
import {useEffect, useState} from "react";

export default function Tab({children, activeTab}) {

  const [active, setActive] = useState(activeTab)

  useEffect(() => {
    setActive(activeTab)
  }, [activeTab])

  const contents = children.filter(c => c.type === Content)
  const items = children.filter(c => c.type === Items)

  const content = contents.find(c => c.props.id === active)

  const data = {
    active,
    setActive
  }

  return (
    <TabContext.Provider value={data}>
      <div className="z-40 sticky top-0 border-b border-[color:var(--background-third)]">
        {items}
      </div>
      {content}
    </TabContext.Provider>
  )
}

Tab.Items = Items
Tab.Item = Item
Tab.Content = Content

Tab.propTypes = {
  children: PropTypes.arrayOf(
    PropTypes.node
  ),
  activeTab: PropTypes.string.isRequired
}
