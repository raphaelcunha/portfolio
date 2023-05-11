import {
  KBarProvider,
  KBarPortal,
  KBarPositioner,
  KBarAnimator,
  KBarSearch,
  useMatches,
  NO_GROUP,
  KBarResults,
} from "kbar";
import { forwardRef } from "react";

const actions = [
  {
    id: "blog",
    name: "Blog",
    shortcut: ["b"],
    keywords: "writing words",
    section: "Go To",
    perform: () => (window.location.pathname = "blog"),
  },
  {
    id: "contact",
    name: "Contact",
    shortcut: ["c"],
    keywords: "email",
    section: "General",
    perform: () => (window.location.pathname = "contact"),
  },
];

function MyKbarProvider({ children }): JSX.Element {
  return (
    <KBarProvider actions={actions}>
      <KBarPortal>
        <KBarPositioner
          style={{
            position: "fixed",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            width: "100%",
            inset: "0px",
            padding: "14vh 16px 16px",
            background: "rgba(0, 0, 0, .8)",
            boxSizing: "border-box",
          }}
        >
          <KBarAnimator
            style={{
              backgroundColor: "rgb(29 25 28)",
              maxWidth: "600px",
              width: "100%",
              color: "$primary",
              borderRadius: "8px",
              overflow: "hidden",
              // @ts-ignore
              "@supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none))":
                {
                  backgroundColor: "$command",
                  WebkitBackdropFilter: "saturate(300%) blur(25px)",
                  backdropFilter: "saturate(300%) blur(25px)",
                },

              /* Hide scrollbar for Chrome, Safari and Opera */
              "& > div > div::-webkit-scrollbar": {
                display: "none",
              },

              /* Hide scrollbar for IE, Edge and Firefox */
              "& > div > div": {
                "-ms-overflow-style": "none",
                "scrollbar-width": "none",
              },
            }}
          >
            <KBarSearch
              placeholder="Type a command or search…"
              style={{
                padding: "12px 16px",
                fontSize: "16px",
                width: "100%",
                boxSizing: "border-box",
                outline: "none",
                border: "none",
                margin: 0,
                background: "rgb(29 25 28)",
                color: "#f2f2f2",
              }}
            />
            <RenderResults />
          </KBarAnimator>
        </KBarPositioner>
      </KBarPortal>
      {children}
    </KBarProvider>
  );
}

function RenderResults() {
  const { results } = useMatches();

  return (
    <KBarResults
      items={results}
      onRender={({ item, active }) =>
        typeof item === "string" ? (
          <div className="bg-[rgb(29 25 28)] px-3 py-2 text-[9px] uppercase tracking-widest text-white">
            {item}
          </div>
        ) : (
          <ResultItem item={item} active={active} />
        )
      }
    />
  );
}

const ResultItem = ({ item, active }) => {
  return (
    <div className="bg-[rgb(29 25 28)] prose m-0 flex justify-between px-3 py-2 dark:prose-invert">
      <div className="flex">
        {item.icon && item.icon}
        <div className="flex flex-col">
          <span className="text-gray-400">{item.name}</span>
        </div>
      </div>
      {item.shortcut?.length ? (
        <div className="grid grid-flow-col gap-1" aria-hidden>
          {item.shortcut.map((shortcut) => (
            <div
              className="text-gray-[#8f9ba8] bg-[rgb(29 25 28)] px-1 py-2 uppercase"
              key={shortcut}
            >
              {shortcut}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

ResultItem.displayName = "ResultItem";

export default MyKbarProvider;
