using System.Collections.Generic;
using CommandLineHelper.Models;

namespace CommandLineHelper.Data
{
    public interface ICommandLineHelperRepo
    {
        bool SaveChanges();

        IEnumerable<Command> GetAllCommands();
        Command GetCommandById(int id);
        void CreateCommand(Command cmd);
        void UpdateCommand(Command cmd);
        void DeleteCommand(Command cmd);
    }
}