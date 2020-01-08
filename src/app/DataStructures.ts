export class RowCellData {

	isPillarScore: boolean;
	cellData: string;
	color: string;
	score: number;
}
export class Row {
	rowName: string;
	rowCellData: RowCellData[];
}
export class Snapshot {
	snapshotName:string;
	dateRefreshedOn:string;
	columnNames:string[];
	runDates:string[];
	rows:Row[];
}
export class Release {
	releaseId: string;
	productionDate: string;
	currentPhase: string;
	snapshots: Snapshot[];
}

export class TeamDashoardData {
	teamId: number; 
	teamName: string;
	accountId: number;
	accountName: string;
	lineName: string;
	releases: Release[];
}

export class AccountDashboardData {
	accountId: number;
	accountName: string;
	snapshots: Snapshot[];
}
export class LineDashboardData {
	lineName: string;
	snapshots: Snapshot[];
}
export class Path {
	name: string;
	link: string;
	constructor(n: string, l: string) {
		this.name = n;
		this.link = l;
	}
}
export class EventEmitted {
	name: string;
	snapshot: Snapshot;
	constructor(name: string, snapshot: Snapshot) {
		this.name = name;
		this.snapshot = snapshot;
	}
}



export class LineDetail {
	lineName: string;
	lineManagerName: string;
	lineDetails: string;
	constructor(lineName: string, lineManagerName: string, lineDetails: string) {
		this.lineName = lineName;
		this.lineManagerName = lineManagerName;
		this.lineDetails = lineDetails;
	}
	public setProperties(ob: LineDetail) {
		this.lineName = ob.lineName;
		this.lineManagerName = ob.lineManagerName;
		this.lineDetails = ob.lineDetails;
	}
	public resetProperties() {
		this.lineName = "";
		this.lineManagerName = "";
		this.lineDetails = "";
	}
}

export class DataSource {
	dataSourceAlpha: string; 
	constructor()
	{}
	 public setProperties(ob: DataSource) {
		 this.dataSourceAlpha = ob.dataSourceAlpha;
	}
	
 public resetProperties() {
		 this.dataSourceAlpha = null;
	 }
 }
export class Account {
	accountId: number;
	accountName: string;
	accountDetails: string;
	lineNames: string[] = [];
	constructor() {

	}
	public setProperties(ob: Account) {
		this.accountId = ob.accountId;
		this.accountDetails = ob.accountDetails;
		this.accountName = ob.accountName;
		this.lineNames = Object.assign([], ob.lineNames);
	}
	public resetProperties() {
		this.accountId = null;
		this.accountDetails = "";
		this.accountName = "";
		this.lineNames = [];
	}
}



export class Team {
	teamId: number;
	teamName: string;
	teamDetails: string;
	teamLeadName: string;
	lineName: string;
	accountName: string;

	constructor() { }
	public setProperties(ob: Team) {
		this.teamId = ob.teamId;
		this.teamName = ob.teamName;
		this.teamDetails = ob.teamDetails;
		this.teamLeadName = ob.teamLeadName;
		this.lineName = ob.lineName;
		this.accountName = ob.accountName;
	}
	public resetProperties() {
		this.teamId = null;
		this.teamName = "";
		this.teamDetails = "";
		this.teamLeadName = "";
		this.lineName = "";
		this.accountName = "";
	}

}


export class Level {
	levelId: number;
	levelName: string;
	levelDetails: string; 

	constructor() { }
	public setProperties(ob: Level) {
		this.levelId = ob.levelId;
		this.levelName = ob.levelName;
		this.levelDetails = ob.levelDetails; 
	}
	public resetProperties() {
		this.levelId = null;
		this.levelName = "" ;
		this.levelDetails = ""; 
	}

}


export class KPI {
	kpiId: number;
	kpiExpression: string;
	kpiScore: number;
	kpiDetails: string; 
	kpiName: string;

	constructor() { }
	public setProperties(ob: KPI) {
		this.kpiId = ob.kpiId;
		this.kpiExpression = ob.kpiExpression;
		this.kpiScore = ob.kpiScore;
		this.kpiDetails = ob.kpiDetails;  
		this.kpiName = ob.kpiName;
	}
	public resetProperties() {
		this.kpiId = null;
		this.kpiExpression = "";
		this.kpiScore = null;
		this.kpiDetails = "";  
		this.kpiName = "";
	}

}


export interface ResponseMessage {
	responseMessage: string;
}

export class KpiPillar {
	pillarId: number;
	kpiPillarName: string;
	levelId: number;
	levelName: string;
	datasource: string;
	kpiId: number;
	kpiExpression: string;
	score: number;
	kpiDetails: string;
	kpiName: string;
	constructor() { 
	}
	

	public setProperties(ob: KpiPillar) {
		this.pillarId = ob.pillarId;
		this.kpiPillarName = ob.kpiPillarName; 
		this.levelId = ob.levelId;
		this.levelName = ob.levelName;
		this.datasource = ob.datasource; 
		this.kpiId = ob.kpiId; 
		this.kpiExpression = ob.kpiExpression; 
		this.score = ob.score; 
		this.kpiDetails = ob.kpiDetails; 
		this.kpiName = ob.kpiName;
	}
	public resetProperties() {
		this.pillarId = null;
		this.kpiPillarName = ""; 
		this.levelId = null;
		this.levelName = "";
		this.datasource = ""; 
		this.kpiId = null; 
		this.kpiExpression = ""; 
		this.score = null; 
		this.kpiDetails = ""; 
		this.kpiName = "";
	}
}


export class Report {
	reportId: number;
	reportName: string;   
	constructor() {
	}

	public setProperties(ob: Report) {
		this.reportId = ob.reportId;
		this.reportName = ob.reportName;  
	}
	public resetProperties() {
		this.reportId = null;
		this.reportName = ""; 
	}
}


export class Pillar {
	pillarId: number;
	pillarName: string;
	pillarDetails: string;
	reportId: number;

	constructor() {
	}

	public setProperties(ob: Pillar) {
		this.pillarId = ob.pillarId;
		this.pillarName = ob.pillarName;
		this.pillarDetails = ob.pillarDetails;
		this.reportId = ob.reportId;
	}
	public resetProperties() {
		this.pillarId = null;
		this.pillarName = "";
		this.pillarDetails = "";
		this.reportId = null;
	}
}



export class ConfigTeam {

	teamId: number;
	teamName: string;
	pillarId: number;
	pillarName: string;
	datasource: string;
	datasourceUrl: string;
	userId: string;
	cron: string;
	password: string;
	constructor() {
	}
	public setProperties(ob: ConfigTeam) {
		this.teamId = ob.teamId;
		this.teamName = ob.teamName;
		this.pillarId = ob.pillarId;
		this.pillarName = ob.pillarName
		this.datasource = ob.datasource;
		this.datasourceUrl = ob.datasourceUrl;
		this.userId = ob.userId;
		this.cron = ob.cron;
		this.password = ob.password;
	}

	public resetProperties() {
		this.teamId = null;
		this.teamName = "";
		this.pillarId = null;;
		this.pillarName = "";
		this.datasource = "";
		this.datasourceUrl = "";
		this.userId = "";
		this.cron = "";
		this.password = "";
	}



}
export class DatasourceDetail
{
	pillarName:string;
	datasourceName:string;
	constructor(){}
}
export class TeamConfigDetails
{
	teamId:number
	teamName:string;
	datasources:DatasourceDetail[];
	constructor(){}
}