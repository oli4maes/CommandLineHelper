using System.Collections.Generic;
using CommandLineHelper.Models;
using System.Threading.Tasks;

namespace CommandLineHelper.Data
{
    public interface ICommandLineHelperRepo
    {
        bool SaveChanges();

        public Task<IList<Command>> GetAllCommands();
        Command GetCommandById(int id);
        void CreateCommand(Command cmd);
        void UpdateCommand(Command cmd);
        void DeleteCommand(Command cmd);
    }
}