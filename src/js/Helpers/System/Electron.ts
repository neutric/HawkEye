const windowRequire = window['require'] as NodeRequire;

/**
 * @returns Electron
 */
export function getElectron(): Electron.ElectronMainAndRenderer
{
  return windowRequire('electron') as Electron.ElectronMainAndRenderer;
};

/**
 * @returns Electron
 */
export function getNewRemoteElectronMenu(): Electron.Menu
{
  let electron = getElectron();

  return new electron.remote.Menu();
};

/**
 * @param  {Electron.MenuItemOptions} opts
 * @returns Electron
 */
export function getNewRemoteElectronMenuItem(opts: Electron.MenuItemOptions): Electron.MenuItem
{
  let electron = getElectron();

  return new electron.remote.MenuItem(opts);
};

/**
 * @param  {string} string
 */
export function copyStringToClipboard(string: string)
{
  getElectron().clipboard.writeText(string);
};

/**
 * @param  {string} url
 * @param  {boolean=true} activate
 */
export function openExternalUrl(url: string, activate: boolean = true)
{
  getElectron().shell.openExternal(url, {
    activate : activate
  });
};

/**
 * @returns string
 */
export function getPlatform(): string
{
  return getElectron().remote.getGlobal('process').platform;
};

/**
 * @returns boolean
 */
export function isMac(): boolean
{
  return getPlatform() === 'darwin';
};

/**
 * @returns Electron
 */
export function getCurrentWindow(): Electron.BrowserWindow
{
  return getElectron().remote.getCurrentWindow();
};