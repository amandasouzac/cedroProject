namespace RestauranteWebAPI.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Initial : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Pratoes",
                c => new
                    {
                        PNome = c.String(nullable: false, maxLength: 128),
                        PPreco = c.Single(nullable: false),
                        PRestaurante = c.String(nullable: false),
                    })
                .PrimaryKey(t => t.PNome);
            
            CreateTable(
                "dbo.Restaurantes",
                c => new
                    {
                        RNome = c.String(nullable: false, maxLength: 128),
                    })
                .PrimaryKey(t => t.RNome);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.Restaurantes");
            DropTable("dbo.Pratoes");
        }
    }
}
