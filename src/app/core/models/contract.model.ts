export class ContractModel {
    id: number;
    link: string;
    talent_id: number;
    job_id: number;
    created_at: string;
    constructor(data: any) {
        this.id = data.id;
        this.link = data.link;
        this.talent_id = data.talent_id;
        this.job_id = data.job_id;
        this.created_at = data.created_at;
    }
}