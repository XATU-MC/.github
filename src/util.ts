import {ElMessage} from "element-plus";

export class Operate {
    public static error(msg): void {
        ElMessage.error(`操作失败：${msg}`);
    }

    public static success(): void {
        ElMessage.success('操作成功');
    }
}