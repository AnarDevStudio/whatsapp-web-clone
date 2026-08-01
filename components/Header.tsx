type HeaderProps = {
    children: React.ReactNode,
}

export default function Header({children} : HeaderProps) {
    return ( 
        <header className="flex justify-between text-white p-4">
            {children}
        </header>
     );
}

function Title({children} : {children: React.ReactNode}){
    return(
        <div>
            {children}
        </div>
    )
}

function Icon({ico} : {ico: string}){

    const setIcon = () => {
        if (ico === "add contact") return <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" fill="none"><title>new-chat-outline</title><path fill="currentColor" d="M9.53 13h1.98v1.97c0 .43.25.85.67.98a1 1 0 0 0 1.31-.94v-2.02h1.98c.43 0 .85-.25.98-.67a1 1 0 0 0-.94-1.31h-2.02V9.03c0-.43-.25-.85-.67-.98a1 1 0 0 0-1.31.94v2.02H9.49a1 1 0 0 0-.94 1.31c.13.42.55.67.98.67Z"></path><path fill="currentColor" fill-rule="evenodd" d="M.94 5.53 3 8.85v8.48C3 18.81 4.2 20 5.67 20h13.66c1.48 0 2.67-1.2 2.67-2.67V6.67C22 5.19 20.8 4 19.33 4H1.8a1 1 0 0 0-.85 1.53ZM5 8.28v9.05c0 .37.3.67.67.67h13.66c.37 0 .67-.3.67-.67V6.67c0-.37-.3-.67-.67-.67H3.6L5 8.28Z" clip-rule="evenodd"></path></svg>
        else if (ico === "3 point") return <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" fill="currentColor"><title>ic-more-vert</title><path fill="currentColor" d="M12 20c-.55 0-1.02-.2-1.41-.59-.4-.39-.59-.86-.59-1.41 0-.55.2-1.02.59-1.41.39-.4.86-.59 1.41-.59.55 0 1.02.2 1.41.59.4.39.59.86.59 1.41 0 .55-.2 1.02-.59 1.41-.39.4-.86.59-1.41.59Zm0-6c-.55 0-1.02-.2-1.41-.59-.4-.39-.59-.86-.59-1.41 0-.55.2-1.02.59-1.41.39-.4.86-.59 1.41-.59.55 0 1.02.2 1.41.59.4.39.59.86.59 1.41 0 .55-.2 1.02-.59 1.41-.39.4-.86.59-1.41.59Zm0-6c-.55 0-1.02-.2-1.41-.59-.4-.39-.59-.86-.59-1.41 0-.55.2-1.02.59-1.41.39-.4.86-.59 1.41-.59.55 0 1.02.2 1.41.59.4.39.59.86.59 1.41 0 .55-.2 1.02-.59 1.41-.39.4-.86.59-1.41.59Z"></path></svg>
        else if (ico === "add call") return <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" fill="currentColor"><title>ic-add-call</title><path fill="currentColor" d="M16 8h-2a.97.97 0 0 1-.71-.29A.97.97 0 0 1 13 7c0-.28.1-.52.29-.71.19-.2.43-.29.71-.29h2V4c0-.28.1-.52.29-.71.19-.2.43-.29.71-.29.28 0 .52.1.71.29.2.19.29.43.29.71v2h2c.28 0 .52.1.71.29.2.19.29.43.29.71 0 .28-.1.52-.29.71A.94.94 0 0 1 20 8h-2v2c0 .28-.1.52-.29.71A.94.94 0 0 1 17 11a.97.97 0 0 1-.71-.29A.97.97 0 0 1 16 10V8Zm3.95 13c-2.08 0-4.14-.45-6.17-1.36a18.3 18.3 0 0 1-5.55-3.87 18.47 18.47 0 0 1-3.87-5.54C3.46 8.18 3 6.13 3 4.04A1.02 1.02 0 0 1 4.05 3H8.1c.23 0 .44.08.63.24a.9.9 0 0 1 .32.56l.65 3.5c.03.27.03.5-.02.67-.05.19-.15.35-.28.48L6.97 10.9c.34.62.73 1.21 1.2 1.79.45.57.96 1.13 1.5 1.66A17.59 17.59 0 0 0 13.1 17l2.35-2.35a1.61 1.61 0 0 1 1.3-.4l3.45.7c.23.07.43.19.57.36.16.18.23.37.23.59v4.05A1.02 1.02 0 0 1 19.95 21ZM6.03 9l1.64-1.65L7.25 5H5.03c.08.68.2 1.36.34 2.03.16.66.37 1.32.66 1.97Zm8.95 8.95a12.42 12.42 0 0 0 4.02 1v-2.2l-2.35-.48-1.67 1.68Z"></path></svg>
        else if (ico === "add") return <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" fill="currentColor"><title>ic-add-circle</title><path fill="currentColor" d="M11 13v3c0 .28.1.52.29.71.19.2.43.29.71.29.28 0 .52-.1.71-.29.2-.19.29-.43.29-.71v-3h3c.28 0 .52-.1.71-.29.2-.19.29-.43.29-.71 0-.28-.1-.52-.29-.71A.97.97 0 0 0 16 11h-3V8c0-.28-.1-.52-.29-.71A.97.97 0 0 0 12 7c-.28 0-.52.1-.71.29A.94.94 0 0 0 11 8v3H8c-.28 0-.52.1-.71.29A.94.94 0 0 0 7 12c0 .28.1.52.29.71.19.2.43.29.71.29h3Zm1 9a10.1 10.1 0 0 1-9.21-6.1A9.74 9.74 0 0 1 2 12a10.1 10.1 0 0 1 6.1-9.21A9.74 9.74 0 0 1 12 2a10.1 10.1 0 0 1 9.21 6.1c.53 1.22.79 2.52.79 3.9s-.26 2.68-.79 3.9a10.1 10.1 0 0 1-5.31 5.31A9.74 9.74 0 0 1 12 22Zm0-2c2.23 0 4.13-.77 5.68-2.32A7.72 7.72 0 0 0 20 12a7.7 7.7 0 0 0-2.32-5.67A7.72 7.72 0 0 0 12 4a7.7 7.7 0 0 0-5.67 2.33A7.72 7.72 0 0 0 4 12c0 2.23.78 4.13 2.33 5.68A7.72 7.72 0 0 0 12 20Z"></path></svg>

    }

    return(
        <div className="flex">
            {setIcon()}
        </div>
    )
}

Header.Title = Title;
Header.Icons = Icon;

export const headerType = ({ selected }: { selected: number }) => {
    if (selected === 0)
      return (
        <Header>
          <Header.Title>
            <svg
              viewBox="0 0 104 28"
              height="28"
              width="104"
              preserveAspectRatio="xMidYMid meet"
              fill="none"
            >
              <title>wa-wordmark</title>
              <path
                fill="currentColor"
                d="m69.56 15.13 2.05-6.26 2.07 6.26zm28.8 3.94c-1.49 0-2.33-1.04-2.33-3.16v-.54c0-1.92.89-3.09 2.42-3.09 1.25 0 2.27.89 2.27 3.35s-.93 3.44-2.36 3.44m-5.55 6.43h3.2v-5.36a3.8 3.8 0 0 0 3.15 1.52c2.98 0 4.84-2.34 4.84-6.12 0-3.77-1.6-5.85-4.62-5.85-1.5 0-2.61.54-3.46 1.67v-1.32h-3.1zm-7.04-6.43c-1.49 0-2.33-1.04-2.33-3.16v-.54c0-1.92.89-3.09 2.42-3.09 1.25 0 2.27.89 2.27 3.35s-.93 3.44-2.36 3.44m-5.55 6.43h3.2v-5.36a3.8 3.8 0 0 0 3.15 1.52c2.98 0 4.84-2.34 4.84-6.12 0-3.77-1.6-5.85-4.62-5.85-1.5 0-2.61.54-3.46 1.67v-1.32h-3.1zm-16.06-4.19h3.41l1.14-3.41h5.81l1.15 3.41h3.52L73.69 5.9h-4zm-5.42.35c3.26 0 4.92-1.34 4.92-3.54S62.62 15 59.64 14.5l-1.4-.24c-1.2-.2-1.58-.58-1.58-1.2 0-.63.48-1.13 1.84-1.13 1.27 0 1.8.47 2 1.68h2.99c-.17-2.57-1.82-3.93-4.99-3.93-2.96 0-4.86 1.28-4.86 3.46s1.27 3.02 4.13 3.5l1.3.21c1.18.2 1.46.63 1.46 1.28 0 .75-.5 1.23-1.86 1.23s-2.14-.52-2.26-1.7h-3.05c.1 2.8 2.16 3.99 5.38 3.99m-8.86-.09c1 0 2.01-.28 2.62-.7v-2.41q-.92.52-1.73.52c-.93 0-1.43-.39-1.43-1.58v-4.86h3.16v-2.5h-3.16v-3.1H46.5v1.73c0 .97-.23 1.38-1.2 1.38h-.85v2.5h1.7v4.97c0 2.61 1 4.06 3.74 4.06m-11.96-2.16c-1.04 0-1.62-.45-1.62-1.25 0-.9.67-1.34 2.22-1.6a5 5 0 0 0 2.06-.7v1.11c0 1.49-1.06 2.44-2.66 2.44m-.82 2.25c1.66 0 2.83-.7 3.74-1.7q.16.8.56 1.35h3.02q-.8-1.27-.78-3.76v-3.6c0-2.68-1.42-4.26-4.8-4.26-2.97 0-4.72 1.23-5.07 3.93h2.92c.17-1.03.8-1.64 2.05-1.64 1.17 0 1.84.48 1.84 1.3s-.5 1.1-2.7 1.42c-2.4.35-4.6 1.21-4.6 3.63 0 2.16 1.53 3.33 3.82 3.33m-15.61-.35h3.2v-6.6c0-.79.19-1.15.66-1.63a2.5 2.5 0 0 1 1.77-.73c1.06 0 1.62.58 1.62 2v6.96h3.2v-7.56c0-2.61-1.3-4.06-3.74-4.06-1.25 0-2.42.4-3.52 1.69V5.89h-3.2zm-17.34 0h3.52l2.55-11.12 2.59 11.12h3.56L20.45 5.9h-3.54l-2.42 11.38-2.59-11.3H8.7L6.07 17.33 3.65 5.89H0z"
              ></path>
            </svg>
          </Header.Title>
          <div className="flex space-x-6">
            <Header.Icons ico="add contact" />
            <Header.Icons ico="3 point" />
          </div>
        </Header>
      );
    else if (selected === 1)
      return (
        <Header>
          <Header.Title>
            <span className="text-2xl">Calls</span>
          </Header.Title>
          <div className="flex space-x-6">
            <Header.Icons ico="add call" />
          </div>
        </Header>
      );
    else if (selected === 2)
      return (
        <Header>
          <Header.Title>
            <span className="text-2xl">Status</span>
          </Header.Title>
          <div className="flex space-x-6">
            <Header.Icons ico="add" />
            <Header.Icons ico="3 point" />
          </div>
        </Header>
      );
    else if (selected === 3)
      return (
        <Header>
          <Header.Title>
            <span className="text-2xl">Channels</span>
          </Header.Title>
          <div className="flex space-x-6">
            <Header.Icons ico="add" />
          </div>
        </Header>
      );
    else if (selected === 4)
      return (
        <Header>
          <Header.Title>
            <span className="text-2xl">Communities</span>
          </Header.Title>
          <div className="flex space-x-6">
            <Header.Icons ico="add" />
          </div>
        </Header>
      );
    else if (selected === 5)
      return (
        <Header>
          <Header.Title>
            <span className="text-2xl">Communities</span>
          </Header.Title>
          <div className="flex space-x-6">
            <Header.Icons ico="add" />
          </div>
        </Header>
      );
      else if (selected === 6)
      return (
        <Header>
          <Header.Title>
            <span className="text-2xl">Anar</span>
          </Header.Title>
        </Header>
      );
  };

