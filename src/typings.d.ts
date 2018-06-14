/* SystemJS module definition */
declare var System: SystemJS;

interface SystemJS {
  import: (path?: string) => Promise<any>;
}

declare var module: NodeModule;
interface NodeModule {
  id: string;
}